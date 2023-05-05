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
          label: 'My求人',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">My求人</h1>
          <div class="works__title-description">
            株式会社TeraDox<br>
            <a href="https://mykyujin.com/" class="works__title-link" target="_blank">https://mykyujin.com/</a>
          </div>
        </div>
        <div class="works__title__image">
          <img src="img/works/img_works_mykyujin.png" alt="My求人" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>現職にて、新規プロダクトとして企画された振袖・着物・フォトスタジオ業界特化型求人サイト「My求人」のデザイン・コーディング・ディレクションを担当しました。</p>
            <p>入社直後のタイミングでちょうど新規事業計画が進んでおり、媒体を「求人」に決定したところからデザイナーとしてジョインし、流れでフロントコーディングも行いました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">デザインコンセプト</h2>
            <p>ペルソナは「専門学校卒などで着付けやメイク・写真を学んだ若い人材」「趣味の延長で業界で働きたい人材」「スキルを持っているが結婚出産などでリアタイし業界に復帰したい経験者」。</p>
            <p>若年層から高年齢層まで想定されたことと女性がメインターゲットであることから、ハードルの高さを感じさせない温かみのあるカラーリングを採用しました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">コロナ渦でいったん注力停止、2022年度に再始動</h2>
            <p>2020年4月にローンチしたものの、コロナ渦真っ最中になり各企業が採用活動に消極的になり、求人掲載が増えず一度頓挫。2022年度に再始動した際には、ディレクションを担当しました。</p>
            <p>管理画面側に当初採用したフレームワーク「Laravel Nova」がサービス拡充のためのスケール性がなく営業サイドからの要望に答えられない側面を持っていたため、今後の運用を考えてLaravel+Vue3へのリプレイスを行うことになり、スケジュール・進捗管理が中心のディレクションを担当。</p>
            <p>一部ページのリニューアルも行い、求人一覧UIや求人ページのデザイン/UIも担当。ユーザーが求める情報、あるべき姿を模索し設計。</p>
            <p>このリニューアルプロジェクトでは、開発チームで綿密に話し合いを行い制作を進めることができた点が自分には大きい点でした。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="img/works/img_works_mykyujin1.png" alt="サイトイメージ" width="642" height="360">
              <div class="works__img-description">求人一覧の求人カード（左）と求人詳細（右）のUI、情報設計、デザインを担当</div>
            </div>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">コンテンツディレクション</h2>
            <p>リニューアルし、求人掲載を増やすべく営業活動を行ってはいたものの、なかなか流入が増えず、対策として記事メディアコンテンツを新規し、そのディレクション・デザインを担当しました。</p>
            <p>キーワード選定、外注ライターへの指示や校正指示などの管理、Wordpressのカスタマイズを行いました。</p>
            <p>これにより記事経由でのUUは最大270%増となりました。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="img/works/img_works_mykyujin2.png" alt="記事コンテンツページイメージ" width="642" height="360">
              <div class="works__img-description">記事コンテンツトップ（左）と記事詳細（右）。資格紹介系の記事がPV/UUが高かったです。</div>
            </div>
          </div>
        </div>

        <div class="works__side">
          <div class="works__summary">
            <div class="works__summary-item">
              <div class="works__summary-title">制作期間</div>
              <div class="works__summary-detail">
                2019年11月〜2020年4月（ローンチ）<br>
                2022年3月〜9月
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">担当領域</div>
              <div class="works__summary-detail">
                <ul role="list">
                  <li>Webデザイン</li>
                  <li>コーディング</li>
                  <li>ディレクション</li>
                </ul>
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作ツール・技術スタック</div>
              <div class="works__summary-detail">
                <ul role="list">
                  <li>XD</li>
                  <li>HTML/CSS</li>
                  <li>Laravel/Laravel Nova</li>
                  <li>Vue.js3</li>
                </ul>
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作体制</div>
              <div class="works__summary-detail">
                <ul role="list">  
                  <li>デザイナー兼コーダー（自分）</li>
                  <li>フロントエンドエンジニア1名</li>
                  <li>バックサイドエンジニア2名</li>
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
