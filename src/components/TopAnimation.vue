<script setup lang="ts">
import Vivus from 'vivus';

function TopAnimation(){
    const vivus = new Vivus('logo', {
      type: 'scenario-sync',
      duration: 15, 
      forceRender: false ,
      animTimingFunction:Vivus.EASE
  })
}
window.onload = () =>{
  TopAnimation();
}

</script>

<template>
  <div class="top-animation">
    <div class="top-animation__title">
      <h1>
        <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 580 140" style="enable-background:new 0 0 580 140;" xml:space="preserve">
          <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/logo.svg" width="580" height="140" mask="url(#clipmask)"></image>
          <mask id="clipmask" maskUnits="objectBoundingBox">
          <path class="st0" d="M33.5,75.5l-16,45c0,0,23-45,35-39s-5,36-5,36s23-40,33-34s-11,29-1,34s33-27,33-27"/>
          <path class="st0" d="M118.5,80.5c0,0-21,32-10,37s35-25,35-25"/>
          <path class="st0" d="M135.5,119.5c0-14,37-107,54-98c17,15-30,53-37,61s-14,32-14,32s25-35,35-27c6,17-6.565,25.045,2,29c9.042,4.175,24.4-10.902,27-16"/>
          <path class="st0" d="M227.5,81.5c12,6,5,19-2,27s-10.332,16.801-19,9c-10-9-5.422-13.367,5-29c14-21-1.339-4.47,13-7c17-3,4,0,5,14"/>
          <path class="st0" d="M276.5,69.5c6,2,20-6,29-6s11-1,11,3s-3,5-4,7"/>
          <path class="st0" d="M309.5,41.5c-6,7-32,50-35,61s-9.21,19.278-4,23"/>
          <path class="st0" d="M328.5,86.5c-9-10-15-4-21,0s-11,13-13,20s-8,8-2,11s20-7,25-13s19-20,19-20c-6,11-18,27-13,31s18,3,27-11"/>
          <path class="st0" d="M365.5,75.5c-2,6-15,44-15,44c10-11,27-37,37-37s6-3,6,4s-7,25,0,29s11,0,18-7"/>
          <path class="st0" d="M452.5,86.5c-6-8-4-11-14-3s-21,14-22,22s-3,11,2,13s11-4,17-10s14-12,17-16s8-10,8-10c-8,21-18,27-13,32s17-2,21-6s16-18,16-18"/>
          <path class="st0" d="M481.5,118.5c-1-8,7-42,9-49s18-39,22-42s9-12,16-7c7,6-17,52-35,59c-14,15-9,32-9,32s23-37,34-31s4,16,0,20s-12,17-16,17s-11-4-11-4"/>
          <path class="st0" d="M532.5,105.5c6-2,25-10,27-14s5-6,2-9s-7-3-11,0s-12,9-15,13s-7,10-7,13s-1,7,5,9s9,1,14-1s8-4,11-7"/>
          <path class="st0" d="M137.5,47.5c1,3,2,4,0,5s-3,0-3-1s-1-3,0-4"/>
          </mask>
        </svg>
      </h1>
    </div>
    <div class="top-animation__text">I'm a web designer, web developer, graphic designer, product manager, web writer. </div>
    <!-- <div class="top-animation__scroll"><span></span>Scroll</div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.top-animation {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 50vh;
	background-color: $beige-light;
	position: relative;
  @include mediaQuery(sm){
    padding: 16px;
    text-align: center;
  }

  &__title{
    text-align: center;
    @include mediaQuery(lg){
      width: 40vw;
    }
    @include mediaQuery(sm){
      width: 60vw;
    }
  }
  &__title .st0{
    fill:none;
    stroke: $white;
    stroke-width:20;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:10;
    stroke-dasharray: 1500;
    stroke-dashoffset:1500;
  }
  &__text{
    font-family: $en-font;
    @include mediaQuery(sm){
      font-size: 14px;
    }
  }
  // &__scroll{
  //   position: absolute;
  //   bottom: 10px;
  //   left: 50%;
  //   z-index: 2;
  //   display: inline-block;
  //   -webkit-transform: translate(-50%, 0);
  //   transform: translate(-50%, 0);
  //   text-decoration: none;
  //   padding-top: 60px;
  //   font-family: $en-font;
  //   span {
  //     position: absolute;
  //     top: 0;
  //     left: 50%;
  //     width: 30px;
  //     height: 50px;
  //     margin-left: -15px;
  //     border: 2px solid $black;
  //     border-radius: 50px;
  //     box-sizing: border-box;
  //   }
  //   span::before {
  //     position: absolute;
  //     top: 10px;
  //     left: 50%;
  //     content: '';
  //     width: 6px;
  //     height: 6px;
  //     margin-left: -3px;
  //     background-color: $green-light;
  //     border-radius: 100%;
  //     -webkit-animation: sdb 2s infinite;
  //     animation: sdb 2s infinite;
  //     box-sizing: border-box;
  //   }
  // }
}

// @-webkit-keyframes sdb {
//   0% {
//     -webkit-transform: translate(0, 0);
//     opacity: 0;
//   }
//   40% {
//     opacity: 1;
//   }
//   80% {
//     -webkit-transform: translate(0, 20px);
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// }
// @keyframes sdb {
//   0% {
//     transform: translate(0, 0);
//     opacity: 0;
//   }
//   40% {
//     opacity: 1;
//   }
//   80% {
//     transform: translate(0, 20px);
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// }
</style>