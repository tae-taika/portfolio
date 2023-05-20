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
        label: 'ローソン銀行アプリ口座開設アプリ',
      }
    ]"
  ></TheBreadCrumb>
  <div class="works">    
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">ローソン銀行口座開設アプリ<br>アプリ画面・プロモーションバナー</h1>
          <div class="works__title-description">
            <a href="https://www.lawsonbank.jp/account/merit/" class="works__title-link" target="_blank">https://www.lawsonbank.jp/account/merit/</a>
          </div>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_lowson.png" alt="ローソン銀行口座開設アプリ" width="1000" height="563">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>
              派遣社員として勤務していたWeb制作会社にて、銀行口座開設アプリのアプリ画面とプロモーションバナーデザインを担当しました。<br>
              （少し古い実績です）
            </p>
          </div>

          <div class="works__section">
            <div class="works__summary">
              <div class="works__summary-item">
                <div class="works__summary-title">制作時期</div>
                <div class="works__summary-detail">2018年1月</div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">担当領域</div>
                <div class="works__summary-detail">
                  <ul role="list">
                    <li>アプリ画面制作</li>
                    <li>プロモーションバナー制作</li>
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
            <h2 class="works__section-title">アプリ画面</h2>
            <p>代理店からのワイヤーフレームと指示書をもとに、30ページほどのアプリ画面のカンプを作成しました。<br>
              基本的なUI設計は正社員デザイナーの方が行い、口座開設のフローに沿ってページを作成しました。</p>
          </div>

          <div class="works__section-img">
            <img src="/img/works/img_works_lowson1.png" alt="アプリ画面デザイン" width="1000" height="563">
          </div>

          <div class="works__section">
            <h2 class="works__section-title">プロモーションバナー</h2>
            <p>アプリカタログなどに使用するプロモーションバナーの制作を行いました。<br>
              コンビニであるローソンの身近で手軽なイメージ、かんたんに申し込みできること、一目でローソンブランドであることを伝えられること等を念頭に、複数案を作成しました。</p>
          </div>
      
          <div class="works__section-img">
            <img src="/img/works/img_works_lowson2.png" alt="バナーデザイン" width="1000" height="563">
            <div class="works__img-description">初期案。スマホで簡単に手続きができるこをイメージできるよう心がけたデザイン。やや固い印象？</div>
          </div>
                 
          <div class="works__section-img">
            <img src="/img/works/img_works_lowson3.png" alt="バナーデザイン" width="1000" height="563">
            <div class="works__img-description">「マチカフェ」などを展開するローソンのイメージから作成したデザイン（左）、ローソンの当時の制服のデザインを落とし込んだデザイン（右）。フォントを丸ゴ系に、より親しみやすいイメージへリデザイン。</div>
          </div>

          <div class="works__section">
            <h3 class="works__section-sub-title">採用デザイン</h3>
            <p>
              テキストでの訴求は最低限に絞り、キャラクターやアプリ画面にもロゴを配置したローソンブランドを強めたデザインが採用されました。<br>
              個人口座の場合、支店名は誕生月によって決定され、月ごとに食べ物の名前がついています。その支店名を背景のイラストに落とし込みました。
            </p>  
            <p>
              イラストは苦手でしたがすべてIllustratorで描き起こし、クライアントには好評をいただくことができました。
            </p>
          </div>

          <div class="works__section-img">
            <img src="/img/works/img_works_lowson.png" alt="バナーデザイン" width="1000" height="563">
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
