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
        label: 'taika 5th album 特設サイト',
      }
    ]"
  ></TheBreadCrumb>
   <div class="works">   
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">taika 5th album 特設サイト</h1>
          <div class="works__title-description">
            taika<br>
            <a href="https://www.taikaweb.jp/annulus/" class="works__title-link" target="_blank">https://www.taikaweb.jp/annulus/</a>
          </div>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_annulus.png" alt="taika 5th album 特設サイト" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <P>自身のバンドの最新アルバムのプロモーション用に特設サイトを制作しました。</P>
          </div>

          <div class="works__section">
            <div class="works__summary">
              <div class="works__summary-item">
                <div class="works__summary-title">制作時期</div>
                <div class="works__summary-detail">2022年4月</div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">制作期間</div>
                <div class="works__summary-detail">2週間ほど</div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">担当領域</div>
                <div class="works__summary-detail">
                  <ul role="list">
                    <li>Webデザイン</li>
                    <li>コーディング</li>
                  </ul>
                </div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">制作ツール・技術スタック</div>
                <div class="works__summary-detail">
                  <ul role="list">
                    <li>XD</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">制作体制</div>
                <div class="works__summary-detail">
                  <ul role="list">  
                    <li>自分</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="works__section">
            <h2 class="works__section-title">サイト構成・デザインコンセプト</h2>
            <p>アルバムを押し売りすることよりは、アルバムの世界観を伝えることをサイトの目的として制作しました。<br>
              まずはアルバムの世界観を伝えることができるメインビジュアルを全面に。背景にもアルバムリーフレットで使用しているラフ画を使用しました。続いてトレーラー、アルバムコンセプト、トラックリストなどを順に構成しました。</p>
            <p>曲ごとのセルフライナーノーツはツイッターでリリース直前から一日一曲ずつ投稿していた内容を転載して毎日更新しました。</p>
          </div>

          <div class="works__section">
            <p>バンドのwebサイトや動画などは、すべて自分で作成しています。<br>
            <a href="https://www.taikaweb.jp/" target="_blank">https://www.taikaweb.jp/</a>
          </p>
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
