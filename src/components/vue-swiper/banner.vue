<template>
  <div class="banner-container">
    <div class="banner-wrapper">
      <div
        class="img-wrapper"
        :class="{ 'img-transition': hasTransition }"
        ref="imgViewRef"
      >
        <img
          v-for="(item, index) of imgList"
          :key="item.id"
          :src="item.src"
          alt=""
          class="banner-img"
          :class="'img' + index"
          @click="handleClick(index - 1)"
        />
      </div>
    </div>
    <div
      style="height: 300px;"
      @mouseenter="() => (isHidden = true)"
      @mouseleave="() => (isHidden = false)"
    >
      <img src="./banenr.png" v-if="!isHidden" alt="" class="test-hover" />
    </div>
    <div class="modal-left" ref="modalLeft"></div>
    <!-- <div
      class="modal-left"
      :class="{ 'modal-hidden': isActive }"
      ref="modalLeft"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    ></div> -->
    <button class="left-button" @click="handeLeft">左</button>
    <button class="right-button" @click="handleRight" ref="">右</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  reactive,
  watch,
  onMounted,
  onUnmounted
} from 'vue'
import Autoplay, { IOptions } from './useAutoplay'
import useTriggerBanner, { ITriggerInfo } from './useTriggerBanner'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const imgList = reactive([
      {
        id: '001',
        src: 'https://images.dog.ceo/breeds/dhole/n02115913_253.jpg'
      },
      {
        id: '002',
        src: 'https://images.dog.ceo/breeds/newfoundland/n02111277_3910.jpg'
      },
      {
        id: '003',
        src: 'https://images.dog.ceo/breeds/kuvasz/n02104029_4494.jpg'
      },
      {
        id: '004',
        src: 'https://images.dog.ceo/breeds/dhole/n02115913_253.jpg'
      },
      {
        id: '005',
        src: 'https://images.dog.ceo/breeds/newfoundland/n02111277_3910.jpg'
      }
    ])

    const hasTransition = ref<boolean>(true)
    const imgViewRef = ref<HTMLElement | null>(null)
    const currentIndex = ref(0)
    const preIndex = ref(-1)

    const options: IOptions = {
      currentIndex: currentIndex,
      preIndex: preIndex,
      direction: 'right',
      duration: 3000
    }

    const triggerInfo: ITriggerInfo = {
      viewRef: imgViewRef as Ref<HTMLElement>,
      imgCounts: imgList.length - 2,
      currentIndex: currentIndex,
      preIndex: preIndex,
      hasTransition
    }

    const { autoplay, stop } = Autoplay(options)

    const handeLeft = () => {
      stop()
      if (imgViewRef.value) {
        preIndex.value = currentIndex.value
        currentIndex.value -= 1
      }
      autoplay()
    }

    const handleRight = () => {
      stop()
      if (imgViewRef.value) {
        preIndex.value = currentIndex.value
        currentIndex.value += 1
      }
      autoplay()
    }

    const handleClick = (index: number) => {
      console.log(index, currentIndex.value)
      if (index === currentIndex.value) {
        console.log('跳转链接')
      } else if (index === currentIndex.value - 1) {
        handeLeft()
      } else if (index === currentIndex.value + 1) {
        handleRight()
      }
    }

    const isActive = ref<boolean>(false)
    const handleMouseEnter = () => {
      isActive.value = true
      console.log('mouseEnter')
    }

    const handleMouseLeave = () => {
      isActive.value = false
      console.log('mouseLeave')
    }

    watch(
      () => currentIndex.value,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
        useTriggerBanner(triggerInfo)
      }
    )

    onMounted(() => {
      autoplay()
    })

    onUnmounted(() => {
      stop()
    })

    const isHidden = ref<boolean>(false)
    return {
      imgList,
      handeLeft,
      handleRight,
      handleClick,
      imgViewRef,
      hasTransition,
      isActive,
      handleMouseEnter,
      handleMouseLeave,
      isHidden
    }
  }
})
</script>

<style scoped>
.banner-container {
  /* width: 100vw;
  height: 37.1vw; */
  width: 1920px;
  height: 448px;
  position: relative;
}

.modal-left {
  width: 16.25vw;
  height: 23.3vw;
  background-color: #000;
  position: absolute;
  top: 0;
  opacity: 0.5;
}

.test-hover:hover {
  visibility: hidden;
}

.modal-left:hover {
  visibility: hidden;
}

.banner-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 280px;
}

.img-transition {
  transition: left 500ms ease-out 0s;
}

.img-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  margin: 0 20px;
}

.img-wrapper > img {
  height: 448px;
  width: 1200px;
  margin: 0 auto;
}

.banner-img {
  height: 100%;
  width: 1200px;
  position: absolute;
  top: 0;
}

.img0 {
  left: -1220px;
}

.img1 {
  left: 0;
}

.img2 {
  left: 1220px;
}

.img3 {
  left: 2440px;
}

.img4 {
  left: 3660px;
}

.left-button {
  /* position: absolute; */
  left: 200px;
  bottom: 0px;
  width: 100px;
  height: 50px;
  z-index: 99;
}

.right-button {
  /* position: absolute; */
  right: 200px;
  width: 100px;
  height: 50px;
  z-index: 99;
}

.banner-pagination {
  position: absolute;
  left: 50%;
  bottom: 30rpx;
}
</style>
