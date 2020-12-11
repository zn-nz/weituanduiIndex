<template>
  <div id="home">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <div
      class="mask_ban_touch"
      v-if="!flag"
      style="width: 100%; height: 100%; z-index: 999; position: absolute"
    ></div>

    <!-- 中间LOGO部分 -->
    <div :class="[{ wrapper_blur: centerShow }, 'wrapper', 'bg-blur']">
      <div :class="['img_shadow', { img_shadow_show: imgLoded }]"></div>
      <div class="inner" style="cursor: pointer" @click="goToBlog">
        <img
          :class="['R_logo', { R_logo_top: flag }]"
          src="@/assets/logo.svg"
        />
        <div :class="['hello', { hello_bottom: flag }]">
          <div>{{ slogan[i] }}</div>
          <div class="hello_bottom_text">点击以访问 微团队</div>
        </div>
      </div>
    </div>

    <!-- 备案号 -->
    <footer class="footer" :class="{ record_number_show: flag }">
      <p>Copyright © 2020 www.weituandui.co All Rights Reserved.</p>
      <p>
        <a
          class="record_number"
          target="_blank"
          href="http://beian.miit.gov.cn/"
          v-if="recordNumber"
          >{{ recordNumber }}</a
        >微团队 版权所有
      </p>
    </footer>
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
export default {
  name: "home",
  data() {
    this.startTime = new Date();
    return {
      flag: false, // 动画是否播放完毕
      slogan: ["欢迎访问"],
      i: 0,
      centerShow: false, // 导航抽屉显示状态
      imgLoded: false, // 背景图片加载状态
    };
  },
  computed: {
    recordNumber() {
      return "浙ICP备19028383号";
    },
  },
  methods: {
    goToBlog() {
      window.location.href = "https://101.91.216.211:8000";
    },
    _jieliu(callback, delay) {
      let currentTime = new Date();
      if (currentTime - this.startTime > delay) {
        callback();
        this.startTime = new Date();
      }
    },
    handleMouseWheel(e) {
      if (e.deltaY < 0) {
        // 如果鼠标滚轮向上滚动
        if (!this.centerShow) {
          this.centerShow = true;
        } else {
          this._jieliu(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      } else {
        // 如果鼠标滚轮向下滚动
        if (!this.centerShow) {
          return;
        } else {
          this._jieliu(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              -100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      }
    },
    hideCenter() {
      this.centerShow = false;
    },
    stopPropagation(e) {
      e.stopPropagation();
    },
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 1300);
    this.i = randomNum(0, this.slogan.length - 1);
  },
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .wrapper {
    background-size: cover !important;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    transition: all 0.8s;
    .inner {
      position: relative;
      .R_logo {
        height: 7rem;
        position: absolute;
        transform: translate(-50%, -50%);
        transition: all 1s;
        top: 0;
      }
      .R_logo_top {
        top: -3.2rem;
      }
      .hello {
        color: #ffffff;
        width: 18.75rem;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        top: 100px;
        transition: all 1s;
      }
      .hello_bottom {
        opacity: 1;
        top: 3.5rem;
        .hello_bottom_text {
          font-size: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #fff;
        }
      }
    }
  }
  .img_shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(27, 103, 64);
    overflow: hidden;
    transition: all 0.5s;
  }
  .img_shadow_show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper_blur {
    filter: blur(1px);
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .center_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    .center_inner {
      width: 70%;
      position: absolute;
      overflow: hidden;
      border-radius: 0.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 5%;
      height: 70%;
    }
  }
  .footer {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    transform: translateY(150px);
    transition: transform ease 1s;
    line-height: 2.0;
    position: fixed;
    color: #fff;
    bottom: 0;
    text-align: center;
  }
  .record_number {
    text-decoration: none;
    color: #fff;
    margin-right: 12px;
  }
  .record_number_show {
    transform: translateY(0px);
  }
}

@media screen and (max-width: 900px) {
  #home {
    .center_wrapper {
      .center_inner {
        width: 100%;
        bottom: 0px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

@keyframes logoEnter {
  0% {
    opacity: 0;
    width: 0rem;
    height: 0rem;
  }
  20% {
    opacity: 1;
    width: 15rem;
    height: 15rem;
  }
  80% {
    transform: rotate(360deg);
    width: 15rem;
    height: 15rem;
  }
  100% {
    transform: rotate(360deg);
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
