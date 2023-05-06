<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TheBreadCrumb from '@/components/TheBreadCrumb.vue';
import ButtonBack from '@/components/Buttonback.vue';
</script>

<template>
  <div class="works">
    <Header></Header>
    <TheBreadCrumb
      :links="[
        {
          url: '/',
          label: 'TOP',
        },
        {
          url: '/works',
          label: 'Works',
        },
        {
          label: 'ライブフライヤー',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">taika ライブフライヤー</h1>
          <div class="works__title-description">
            taika
          </div>
        </div>
        <div class="works__title__image">
          <img src="/img/works/img_works_flyer.png" alt="ライブフライヤー" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>自身のバンドのライブやアルバムリリースのフライヤーをデザインしました。<br>
              紙のデザインは独学です。<br>
              対バンさんやライブごとの世界観がわかるようなデザインを心がけています。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_flyer1.png" alt="フライヤーデザイン" width="642" height="360">
            </div>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_flyer2.png" alt="フライヤーデザイン" width="642" height="360">
            </div>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_flyer3.png" alt="フライヤーデザイン" width="642" height="360">
            </div>
          </div>
        </div>

        <div class="works__side">
          <div class="works__summary">
            <div class="works__summary-item">
              <div class="works__summary-title">制作期間</div>
              <div class="works__summary-detail">1デザイン2〜5日ほど</div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作ツール・技術スタック</div>
              <div class="works__summary-detail">
                <ul role="list">
                  <li>Illustraor</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作体制</div>
              <div class="works__summary-detail">
                <ul role="list">  
                  <li>デザイナー兼コーダー（自分）</li>
                  <li>ディレクター1名</li>
                  <li>バックエンドエンジニア1名</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="works__button-wrapper">
        <ButtonBack
          link="/works"
        >BACK to Works</ButtonBack>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/layout';
@import '@/assets/scss/works';

</style>
