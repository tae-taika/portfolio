<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TheBreadCrumb from '@/components/TheBreadCrumb.vue';
import ButtonBack from '@/components/Buttonback.vue';
</script>

<template>
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
        label: 'JA全農たまご',
      }
    ]"
  ></TheBreadCrumb>
  <div class="works">    
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">JA全農たまご<br>キャンペーンバナー</h1>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_tamago.png" alt="JA全農たまごキャンペーンバナー" width="1000" height="563">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>
              派遣社員として勤務していたWeb制作会社にて、商品キャンペーンバナーの作成を行いました。<br>
              （少し古い実績です）
            </p>
          </div>

          <div class="works__section">
            <div class="works__summary">
              <div class="works__summary-item">
                <div class="works__summary-title">制作時期</div>
                <div class="works__summary-detail">2018年2月</div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">担当領域</div>
                <div class="works__summary-detail">
                  <ul role="list">
                    <li>バナーデザイン制作</li>
                  </ul>
                </div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">制作ツール</div>
                <div class="works__summary-detail">
                  <ul role="list">  
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="works__section">
            <p>キャンペーンサイトのLPデザイン（Phosothop）のパーツから、バナーをサイズ展開制作しました。<br>
              バランスを考慮し、にぎやかし素材を入れすぎないよう気をつけました。</p>
          </div>

          <div class="works__section-img">
            <img src="/img/works/img_works_tamago1.png" alt="JA全農たまごキャンペーンバナーデザイン" width="1000" height="563">
          </div>
      
          <div class="works__section-img">
            <img src="/img/works/img_works_tamago2.png" alt="JA全農たまごキャンペーンバナーデザイン" width="1000" height="563">
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
