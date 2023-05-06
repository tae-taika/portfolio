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
        label: '電子契約システム キャンペーンLP',
      }
    ]"
  ></TheBreadCrumb>
  <div class="works">
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">電子契約システム キャンペーンLP</h1>
          <div class="works__title-description">
            株式会社TeraDox<br>
            <a href="https://keiyaku-daijin.com/pr/yearplan-sale" class="works__title-link" target="_blank">https://keiyaku-daijin.com/pr/yearplan-sale</a>
          </div>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_daijin.png" alt="契約大臣 電子契約導入半額キャンペーン" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>現職にて、自社プロダクトのひとつである電子契約システム「契約大臣」のキャンペーンLPのデザイン・コーディングを担当しました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">サイト構成</h2>
            <p>・キャンペーン内容<br>期間中に年額プランに申し込むと半額になる</p>
            <p>・ディレクターからの要望<br>キャンペーン名を大きく、訴求はシンプルに<br>電子契約ってなに？という初歩的知識のユーザーよりは、導入を検討しているユーザーがターゲット</p>
            <p>上記を踏まえ、サービスの説明と電子契約そのものについてはポイントだけに絞り、別ページへ誘導。</p>
            <p>キャンペーンセクションでどれだけトクになるかをイメージできるようグラフを用いてわかりやすく訴求しました。</p>  
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_daijin1.png" alt="ワイヤーフレーム" width="642" height="360">
              <div class="works__img-description">初回のワイヤーフレーム</div>
            </div>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">デザインコンセプト</h2>
            <p>Sass系を意識したものと、キャンペーンの達成目的を意識したものと、デザインを2案作成しました。</p>
            <ul class="works__section-list">
              <li>
                A案<br>
                本サイトのメインカラー青を踏襲・信頼・安心感・堅実感なイメージ
              </li>
              <li>
                B案<br>
                キャンペーンのわくわく感・親しみやすさ・新規入りやすさ・かんたんライトなイメージ
              </li>
            </ul>
            <p>自分的にはB案推しで、結果的にはディレクターなどのステークホルダー判断でB案となりました。</p>
            <p>またキャンペーン名タイトルは「半額」であることが目視でつたわるようメインカラー2色を使い表現しました。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_daijin2.png" alt="ふたつのデザイン" width="642" height="360">
              <div class="works__img-description">A案（左）B案（右）</div>
            </div>
          </div>
        </div>

        <div class="works__side">
          <div class="works__summary">
            <div class="works__summary-item">
              <div class="works__summary-title">担当時期</div>
              <div class="works__summary-detail">2023年3月</div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">担当期間</div>
              <div class="works__summary-detail">5営業日ほど</div>
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
                  <li>Figma</li>
                  <li>HTML/CSS</li>
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
