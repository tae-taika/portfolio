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
        label: '中京銀行Webマイカーローン LP',
      }
    ]"
  ></TheBreadCrumb>
  <div class="works">    
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">中京銀行Webマイカーローン LP</h1>
          <div class="works__title-description">
            <a href="https://www.chukyo-bank.co.jp/loan/mycar_web/" class="works__title-link" target="_blank">https://www.chukyo-bank.co.jp/loan/mycar_web/</a>
          </div>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_chukyo.png" alt="中京銀行Webマイカーローン LP" width="1000" height="563">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>
              派遣社員として勤務していたWeb制作会社にて、銀行のマイカローンのLPデザイン制作を行いました。<br>
              （少し古い実績です）
            </p>
          </div>

          <div class="works__section">
            <div class="works__summary">
              <div class="works__summary-item">
                <div class="works__summary-title">制作時期</div>
                <div class="works__summary-detail">2019年6月</div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">担当領域</div>
                <div class="works__summary-detail">
                  <ul role="list">
                    <li>LPデザイン</li>
                    <li>バナー制作</li>
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
            <h2 class="works__section-title">LPデザイン</h2>
            <p>代理店からのワイヤーフレームを元にデザインしました。<br>
              テキストや構成は決まっていたため、ターゲットユーザーであるお子さんがいる男性を意識し、訴求点が伝わりやすいよう写真素材を用いてレイアウトしました。
            </p>
            <p>
              また、スケジュールがタイトだったため、コーダーへの負担軽減を考慮しレスポンシブでマークアップしやすいデザインを心がけました。<br>
              TOPのスライダーバナーやメガドロップメニューのアイコンも作成しました。
            </p>
          </div>

          <div class="works__section-img-long">
            <img src="/img/works/img_works_chukyo1.png" alt="LPデザイン" width="1000" height="2230">
          </div>
      
          <div class="works__section-img">
            <img src="/img/works/img_works_chukyo2.png" alt="バナーデザイン" width="1000" height="563">
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
