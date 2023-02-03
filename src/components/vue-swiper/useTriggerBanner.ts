import { Ref } from 'vue'

export interface ITriggerInfo {
  viewRef: Ref<HTMLElement>,
  currentIndex: Ref<number>,
  preIndex: Ref<number>,
  hasTransition: Ref<boolean>,
  imgCounts: number
}

const useTriggerBanner = (viewInfo: ITriggerInfo) => {
  const { viewRef, currentIndex, preIndex, imgCounts, hasTransition } = viewInfo
  hasTransition.value = true

  // 往左播内容是往右移，往右播内容是往左移
  viewRef.value.style.left = `${currentIndex.value * -1220}px`

  const backToStart = () => {
    preIndex.value = currentIndex.value
    currentIndex.value = 0
    viewRef.value.removeEventListener('transitionend', backToStart)
  }

  const backToEnd = () => {
    preIndex.value = currentIndex.value
    currentIndex.value = imgCounts - 1
    viewRef.value.removeEventListener('transitionend', backToEnd)
  }

  if (currentIndex.value === imgCounts) {
    viewRef.value.addEventListener('transitionend', backToStart)
  }

  if (currentIndex.value === -1) {
    viewRef.value.addEventListener('transitionend', backToEnd)
  }

  if (
    (currentIndex.value === 0 && preIndex.value === imgCounts) ||
    (currentIndex.value === imgCounts - 1 && preIndex.value === -1)
  ) {
    hasTransition.value = false
  }
}

export default useTriggerBanner
