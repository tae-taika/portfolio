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
          label: 'GLAM PRINT',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">GLAM PRINT</h1>
          <div class="works__title-description">
            株式会社TeraDox<br>
            <a href="https://glam-print.com/" class="works__title-link" target="_blank">https://glam-print.com/</a>
          </div>
        </div>
        <div class="works__title__image">
          <img src="/img/works/img_works_gp.png" alt="GLAM PRINT" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>現在在職している会社の事業のひとつである、年賀状Web作成サービス「GLAM PRINT」においてプロダクトマネージャーとしてサービス全体の設計に携わりました。</p>
            <p>入社した2019年10月、他社が運営していた当サービスを既存ユーザごと買収しサービス1年目で、手探りの状態で運営している状況でした。</p>
            <p>入社後よりメルマガ運用やクリエイティブ制作に関わり、2021年にサイトリニューアル計画発足とともにサービス全体をプロデュースするプロダクトマネジメント担当となりました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">サイトリニューアル - サイト構成・デザイン改修</h2>
            <p>引き継ぎ時は印刷会社のサーバ/システムでサイト全体を管理しており、都度修正指示を出し確認〜公開のフローが必要で工数がかかる上、臨機応変な対応が難しい状況でした。<br>
              そこでユーザーのログイン画面以前のページとフロントのページを切り離し、フロント側は弊社が管理する設計へ変更しました。</p>
            <p>私の参画前は高品質な印刷と貼り合わせ製法の技術を推す「高級年賀状」という訴求をしていましたが、サービスの持つ真の価値・ユーザーからの評価・ペルソナ設計等を改めて見直し、「シンプルだから魅力的」というコンセプトを見い出し新たに掲げ、レガシーだったサイト構成やサイトデザインもそれに合わせて再構築しました。</p>
            <p>設計変更はフロントエンジニア/バックエンドエンジニアにより、Nuxt.js+Vue.jsで構築。私のスキル外のフレームワークでしたが、これを機に自身でも小さな修正は行えるようVue.jsを学びはじめました。<br>
デザインはフロントエンジニアと共同で大手ECサイトなどを手本に、UI/UX設計を綿密に行い制作しました。（Adobe XDをメインで使用）</p>
            <p>フロントを切り離したことにより都度柔軟な訴求の追加などが行えるようになったことと、整備されていなかったガイドやFAQ、テンプレートの検索機能なども一新され、ユーザーからの問い合わせ数を減らすことができました。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_gp1.png" alt="サイトイメージ" width="642" height="360">
              <div class="works__img-description">ただテンプレートが並んでいるだけだった旧年賀状一覧ページ（左）と検索機能やはめ込む画像の切り替え機能が備わった新年賀状一覧ページ（右）</div>
            </div>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">サイトリニューアル - サービス施策ディレクション</h2>
            <p>リニューアルにともない、下記の新機能・新サービス・サービス改定などの仕様の策定などのディレクションを行いました。</p>
            <ul class="works__section-list">
              <li>
                料金改定<br>
                印刷料金を値上げ、いままで一律料金だった送料を一定枚数以上で無料に
              </li>
              <li>
                ポストへの直接投函代行開始<br>
                ユーザー指定住所着ではなく印刷所からそのままポストへ投函するサービス
              </li>
              <li>ユーザーのオリジナルデータ入稿対応</li>
            </ul>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">テンプレートデザインディレクション</h2>
            <p>外注クリエイターへのテンプレートの新規デザインディレクション、テンプレート作成時に使用できるカラーの刷新などを行いました。</p>
            <p>テンプレートは数はあるものの引き継いだ時のそのままで運用しており、リピーターから新しいデザインの追加要望の声が多く上がっていました。<br>
              サービスの掲げる「シンプルおしゃれ」のコンセプトにそぐう作風のデザインを模索し、クリエイターへの発注〜ディレクションまでを担当しました。</p>
            <p>テンプレート背景色に使用できるカラーは実際の利用率と競合他社の調査等のもと選定し、サンプル出力し社内デザイナーと色校を行い決めました。</p>
            <p>追加したテンプレートは写真もの/イラストもの共に、発注数上位を占め、ユーザーの要望に応えることができたと感じています。</p>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_gp2.png" alt="テンプレートデザイン" width="642" height="360">
              <div class="works__img-description">背景カラーのリニューアル（上）、メルマガで訴求した新写真テンプレートと新イラストテンプレート（下）</div>
            </div>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">SalesForce Pardotを使用したメルマガ運用</h2>
            <p>セグメント分け、ステップメール設計、スケジュール、クリエイティブ作成、外注製作者ディレクションなどを担当しました。<br>
              販売推移に応じての臨時配信等でユーザーの囲い込みを行い注文数を伸ばしました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">販促用写真撮影ディレクション</h2>
            <p>サイトメインビジュアルやバナー広告等に使用する写真素材の撮影ディレクションを行いました。<br>
              あまり費用投資できなかったため、カメラマンは社内のカメラ経験者、撮影小物は自ら調達し社の会議室で撮影。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">記事コンテンツ執筆・ディレクション</h2>
            <p>SEO対策として「年賀状」や「喪中」「寒中見舞い」等に関する記事コンテンツのページ作成のディレクションを行いました（記事のキーワード・内容等の選定と外注ライターへ発注・修正指示・校正等、クリエイティブ作成、ページデザイン、コーディング）。<br>
              一部記事は自身でも執筆しました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">そのほかLPデザイン・クリエイティブ作成</h2>
          </div>

          <div class="works__section">
            <div class="works__section-img">
              <img src="/img/works/img_works_gp3.png" alt="LPデザインなど" width="642" height="360">
              <div class="works__img-description">新規獲得リスティング用LP（左）キャンペーンLP（中央）バナー類（右）</div>
            </div>
          </div>
        </div>

        <div class="works__side">
          <div class="works__summary">
            <div class="works__summary-item">
              <div class="works__summary-title">担当期間</div>
              <div class="works__summary-detail">2019年10月〜現在</div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">担当領域</div>
              <div class="works__summary-detail">
                <ul role="list">
                  <li>プロダクトマネジメント</li>
                  <li>Webデザイン</li>
                  <li>一部コーディング</li>
                  <li>コンテンツディレクション</li>
                  <li>ライティング</li>
                  <li>メルマガ運用</li>
                  <li>紙媒体デザイン</li>
                </ul>
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作ツール・技術スタック</div>
              <div class="works__summary-detail">
                <ul role="list">
                  <li>XD/Illustrator</li>
                  <li>HTML/CSS</li>
                  <li>Vue.js/Nuxt.js</li>
                  <li>Salesforce Pardot</li>
                </ul>
              </div>
            </div>
            <div class="works__summary-item">
              <div class="works__summary-title">制作体制</div>
              <div class="works__summary-detail">
                <ul role="list">  
                  <li>PdM兼デザイナー兼コーダー（自分）</li>
                  <li>デザイナー兼フロントエンド1名</li>
                  <li>インフラエンジニア1名</li>
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
