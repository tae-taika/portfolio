<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TheBreadCrumb from '@/components/TheBreadCrumb.vue';
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
          label: 'My神社',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">My神社</h1>
          <div class="works__title-description">
            株式会社TeraDox
            <a href="https://myjinja.com/" class="works__title-link" target="_blank">https://myjinja.com/</a>
          </div>
        </div>
        <div class="works__title__image">
          <img src="img/img_works_myjinja.png" alt="GLAM PRINT" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>現職にて、新規プロダクトとして企画されたご祈祷の予約ができる神社ポータルサイト「My神社」のデザインを担当しました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">サイト設立の経緯</h2>
            <p>既存サービスのひとつである写真館選びのポータルサイト「七五三クラブ」で、七五三×神社の特集を組むことになった際、派生して神社ポータルをつくってしまえば？！と発展して、事業が誕生。</p>
            <p>話が上がった当初はコロナ禍真っ最中で、外出や人混みを自粛・控える空気が強く、神社側も受付を制限するなどの動きがみられていました。神社へそのまま予約を誘導できるような仕組みを作れれば、、のちのちはオンライン参拝や、御朱印やお守りのECへ繋げられれば、という展望をもってスタートしました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">サイト設計</h2>
            <p>既存ポータルサイトの仕組みを流用するかたちで実装を進めたため、UIについては既存のポータルサイトの基軸に、ユーザーが目的とする「神社さがし」をスムーズに行えるよう設計を行いました。</p>
            <p>エリア・ご利益・ご祈祷の種類・その他感染症対策の有無やバリアフリー対応で絞り込みを可能に。お祭りの情報や、季節ごとに「初詣特集」や「敬老の日の長寿祝い特集」、オリンピックの時期には「必勝祈願特集」などの特集ページを定期的に作成しコンテンツを増やしていきました。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="img/works/img_works_myjinja1.png" alt="サイトデザイン" width="642" height="360">
              <div class="works__img-description">検索UI（左）と特集ページ（右）</div>
            </div>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">デザインコンセプト</h2>
            <p>ペルソナが「20代後半〜30代後半の女性」であり、出産を控えており安産祈願をしたい・スピリチュアルやパワースポットなどを好む・神社好き、建築や歴史・文化に興味がある、といった層をターゲットとしていたため、落ち着きのあるテイスト・渋くなりすぎない和の世界観を示せるデザインを心がけました。</p>
            <p>神社といえば誰もが想像する鳥居や御朱印の「朱」の使用はロゴカラーのみに留め、プライマリカラーのグリーン、セカンダリカラーのパープルはともに和のテイストを感じさせる色相を設定。メインのフォントを明朝体にしカラーはダークネイビーにすることで、サイト全体に大人の落ち着きを持たせました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">雑誌「anan」に掲載</h2>
            <p>コロナ禍で人手の多い場所への外出などが制限されるようになり、年末年始の初詣の時期にはいくつかのメディアから掲載依頼や取材の申し入れがありました。</p>
            <p>そのうち雑誌「anan」の神社特集ページに掲載していただき、サイトのコンセプトとデザインが認められたことは自信につながりました。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="img/works/img_works_myjinja2.png" alt="掲載イメージ" width="642" height="360">
              <div class="works__img-description">anan 2021年1/6号 (発売日2020年12月25日)掲載イメージ</div>
            </div>
          </div>
        </div>

        <div class="works__side">
          <div class="works__summary">
            <div class="works__summary-item">
              <div class="works__summary-title">制作期間</div>
              <div class="works__summary-detail">2020年7月〜2020年10月（ローンチ）</div>
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
                  <li>Laravel</li>
                </ul>
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作体制</div>
              <div class="works__summary-detail">
                <ul role="list">  
                  <li>デザイナー兼コーダー（自分）</li>
                  <li>ディレクター1名</li>
                  <li>バックサイドエンジニア1名</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
