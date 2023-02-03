import { ref, Ref } from 'vue'

type Direction = 'left' | 'right'

export interface IOptions {
  currentIndex: Ref<number>,
  preIndex: Ref<number>,
  direction: Direction,
  duration: number,
}

const Autoplay = (options: IOptions) => {
  const interval = ref<any>(null)
  const { direction, duration, currentIndex, preIndex } = options
  const dir = direction === 'right' ? 1 : -1

  const autoplay = () => {
    interval.value = setInterval(() => {
      preIndex.value = currentIndex.value
      currentIndex.value += dir
    }, duration)
  }

  const stop = () => {
    clearInterval(interval.value)
  }

  return {
    autoplay,
    stop
  }
}

export default Autoplay
