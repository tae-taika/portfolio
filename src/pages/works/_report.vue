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
          label: '振袖ポータルサイト 投稿写真ギャラリー',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">振袖ポータルサイト 投稿写真ギャラリー</h1>
          <div class="works__title-description">
            株式会社TeraDox<br>
            <a href="https://myfurisode.com/report-2023" class="works__title-link" target="_blank">https://myfurisode.com/report-2023</a>
          </div>
        </div>
        <div class="works__title__image">
          <img src="/img/works/img_works_report.png" alt="成人式オンラインレポート" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <P>現職にて、自社プロダクトのひとつである振袖ポータルサイト「My振袖」のユーザー投稿写真のギャラリーページのデザイン・コーディングを担当しました。</P>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">サイト構成</h2>
            <p>・ページ概要<br>成人式会場へ取材に行き撮影した女の子たちの写真を掲載する「成人式レポート」ページを毎年更新していたが、コロナ渦に入り成人式自体の自粛などもあったため、オンラインで写真を募集し「オンラインレポート」コンテンツとして掲載することになった。</p>
            <P>・ページの目的・ターゲット<br>リアルな成人式振袖コーデを掲載し、翌年以降に成人式を迎えるユーザーへリーチする。</P>
            <p>作業効率化の目的で、リアルに成人式取材を行っていた時と同様の地方ごと（=取材に行った成人式会場ごと）に集まった写真を掲載していくページ構成で作成。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">デザインコンセプト</h2>
            <p>ターゲットはリアルな成人式を迎える世代のため、高校生〜二十歳前の女の子が好むテイストを意識してデザインしました。<br>
              女子大生のインターンが在籍していたため、調査も行いました。</p>
            <p>カラーは明るめのグラデーション、フォントは見出しとしての役割を果たしつつ、太すぎないスタイリッシュなタイプを選び、そのぶん可読性を高める意味で文字間を多めに取っています。</p>
            <p>自分的にはB案推しで、結果的にはディレクターなどのステークホルダー判断でB案となりました。</p>
            <p>初回デザイン時はまだどんな写真が投稿されるのか不明なため、前年度の写真素材を使ってアタリでデザインしていましたが、地方ごとに設定したカラーと振袖や帯などの小物に同じカラーが使われている女の子の写真を合わせて選定したことが小さなこだわりです。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_report1.png" alt="サイトデザイン" width="642" height="360">
              <div class="works__img-description">アタリver（左）はめたver（右）</div>
            </div>
          </div>


          <div class="works__section">
            <p>2022年verもデザインしています。<br>
              <a href="https://myfurisode.com/report-2022" target="_blank">https://myfurisode.com/report-2022</a>
            </p>
          </div>
        </div>

        <div class="works__side">
          <div class="works__summary">
            <div class="works__summary-item">
              <div class="works__summary-title">担当時期</div>
              <div class="works__summary-detail">2023年1月</div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">担当期間</div>
              <div class="works__summary-detail">4〜5営業日ほど</div>
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
