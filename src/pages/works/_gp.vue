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
        label: 'GLAM PRINT',
      }
    ]"
  ></TheBreadCrumb>
  <div class="works">
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">GLAM PRINT</h1>
          <div class="works__title-description">
            株式会社TeraDox<br>
            <a href="https://glam-print.com/" class="works__title-link" target="_blank">https://glam-print.com/</a>
          </div>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_gp.png" alt="GLAM PRINT" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <p>現在在職している会社の事業のひとつである、年賀状Web作成サービス「GLAM PRINT」においてプロダクトマネージャーとしてサービス全体の設計に携わりました。</p>
          </div>

          <div class="works__section">
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
                    <li>XD,Illustrator</li>
                    <li>HTML,CSS</li>
                    <li>Vue.js,Nuxt.js</li>
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

          <div class="works__section">
            <h2 class="works__section-title">やったこと① サイトリニューアルディレクション・デザイン</h2>
            <p>2021年に行ったサイトリニューアルのディレクションとデザイン・一部コーディングを担当しました。</p>
            <h3 class="works__section-sub-title">システム構成の変更</h3>
            <p>            
              <span class="works__section-label">Before</span>
              サイトのすべてを印刷会社のサーバ/システムでサイト全体を管理しており、都度修正指示を出し確認〜公開のフローが必要で、工数がかかっていた。
            </p>
            <p>
              <span class="works__section-label">After</span>
              ユーザーのログイン画面以前のページとフロントのページを切り離し、フロント側は弊社が管理する設計へ変更。<br>
              迅速かつ自由にフロント側を修正・改善できるようになり、工数削減と、臨機応変な訴求の変更により注文件数の増加につながった。
            </p>
          </div>

          <div class="works__section-img">
            <img src="/img/works/img_works_gp_1.png" alt="" width="1000" height="563">
            <div class="works__img-description">新旧サイトマップ。色付きの箇所がシステム会社側の管理部分。</div>
          </div>

          <div class="works__section">
            <h3 class="works__section-sub-title">コンセプトの見直し</h3>
            <p>            
              <span class="works__section-label">Before</span>
              紙質のよさを訴求し「高級年賀状」というワードで訴求していたが、サービスの持つ真の価値・ユーザーからの評価とは異なるため、サイトリニューアルを機に見直し。
            </p>
            <p>
              <span class="works__section-label">After</span>
              他社との差異はどこか、ユーザーに受け入れられているのはどの部分か、を深掘り。<br>
              「シンプルだから魅力的」というコンセプトを見い出し新たに掲げ、メインビジュアルやaboutページに盛り込み「シンプル おしゃれ 年賀状」等のワードで検索上位に表示されるようになった。
            </p>

            <h3 class="works__section-sub-title">デザイン大幅改修</h3>
            <p>            
              <span class="works__section-label">Before</span>
              ユーザーが注文に至るまでの導線がわかりづらく、テンプレートの検索機能などもないため、求めるページに辿り着きづらい構成になっていた。<br>
              デザイン全体もカラー設計の統一がなくレガシーな印象。
            </p>
            <p>
              <span class="works__section-label">After</span>
              主力である「年賀状」をメインの導線に、喪中・寒中見舞い・新たに法人向け年賀状のページを新設。テンプレートをタテヨコ・写真枚数・トリミングなどで検索できるように改修。<br>
              デザイン作成フローや注文フローも変更になったため、操作ガイドはユーザーが迷わないようすべてサムネイル付きで詳細フローを掲載。FAQ等も整備。<br>
              結果、ユーザーからの問い合わせは前年より減少させることができた。</p>
            <p>
              サイトデザインはメインカラーを年賀状を想定させる「赤」をプライマリカラーに、セカンダリカラーはグレースケールで展開し、極力ポイントカラーを使わないことにより「シンプル」というコンセプトを体現。<br>
              テンプレートそのものが見やすいデザインを目指した。
            </p>
          </div>

          <div class="works__section-img">
            <img src="/img/works/img_works_gp1.png" alt="サイトイメージ" width="1000" height="563">
            <div class="works__img-description">ただテンプレートが並んでいるだけだった旧年賀状一覧ページ（左）と検索機能やはめ込む画像の切り替え機能が備わった新年賀状一覧ページ（右）</div>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">やったこと② サービス施策ディレクション</h2>
            <p>下記の新機能・新サービス・サービス改定などの仕様の策定などのディレクションを行いました。</p>
            <ul class="works__section-list">
              <li>
                料金改定<br>
                印刷料金を値上げ、いままで一律料金だった送料を20枚以上の注文で無料に
              </li>
              <li>
                ポストへの直接投函代行開始<br>
                ユーザー指定住所着ではなく印刷所からそのままポストへ投函するサービス
              </li>
              <li>
                ユーザーのオリジナルデータ入稿対応<br>
                自由なデザインでのニーズに対応              
              </li>
              <li>
                無料お試し印刷サービス<br>
                それまで無料サンプル請求→発送を行っていたが、ユーザーの作成したデザインでのお試し印刷受注に変更
              </li>
            </ul>
            <p>
              <span class="works__section-label">After</span>
              最も効果が高かったのは「無料お試し印刷サービス」で、初めての試みだったが受注数は目標より126%を達成し、お試しからの注文転換率も86%と高い数値で着地することができた。
            </p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">やったこと③ テンプレートデザインディレクション</h2>
            <p>外注クリエイターへのテンプレートの新規デザインディレクション、テンプレート作成時に使用できるカラーの刷新などを行いました。</p>
            <p>
              <span class="works__section-label">Before</span>
              テンプレートは数はあるものの追加や変更なくそのままで運用しており、リピーターから新しいデザインの追加要望の声が多く上がっており、リピーターの離脱の可能性を孕んでいた。
            </p>
            <p>
              <span class="works__section-label">After</span>
              サービスのコンセプトにそぐうデザインを作成できるクリエイターをアサインし、サービスやユーザーセグメントを意識したデザインを依頼。<br>
              追加したテンプレートは写真もの/イラストもの共に発注数上位を占め、クリエイターのファンの新規顧客も増え、ユーザーの要望に応えることができた。
            </p>
          </div>


          <div class="works__section-img">
            <img src="/img/works/img_works_gp2.png" alt="テンプレートデザイン" width="1000" height="563">
            <div class="works__img-description">背景カラーのリニューアル（上）、メルマガで訴求した新写真テンプレートと新イラストテンプレート（下）</div>
          </div>


          <div class="works__section">
            <h2 class="works__section-title">SalesForce Pardotを使用したメルマガ運用</h2>
            <p>セグメント分け、ステップメール設計、スケジュール、クリエイティブ作成、外注製作者ディレクションなどを担当しました。
            </p>
            <p>
              <span class="works__section-label">Before</span>
              担当初年度はクリエイティブ制作からHTMLメール作成、配信リスト作成、計測まですべて自身で行っており、作業に追われて内容をアップデートする余裕がなかった。
            </p>
            <p>
              <span class="works__section-label">After</span>
              制作を外注することにより、計画的にメルマガ配信スケジュールや配信内容を練ることができ、繁忙期に合わせた配信を行うことができた。<br>
              計測をじっくり行う余裕もできたため、臨時のクーポンメルマガ等を打つなど、販売推移に応じて訴求を行い注文数を伸ばした。
            </p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">販促用写真撮影ディレクション</h2>
            <p>サイトメインビジュアルやバナー広告等に使用する写真素材の撮影ディレクションを行いました。</p>
            <p>
              <span class="works__section-label">Before</span>
              ツヤあり・ツヤなしの二つの紙質にこだわりがあることを訴求しているにもかかわらず、実際のイメージが伝わる写真素材がなかった。
            </p>
            <p>
              <span class="works__section-label">After</span>
              デザインの良さを伝えられること、ユーザーが実際に手に取った時がイメージしやすいこと、ブランドのもつ「シンプルおしゃれ」を体現できることを念頭に、撮影小物などはすべて自ら調達し、社内のカメラ経験者とともに試行錯誤しながら撮影。<br>
              メインビジュアルやメルマガ・リスティング広告にも使用し、ブランディング向上につながった。
            </p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">記事コンテンツ執筆・ディレクション</h2>
            <p>SEO対策として「年賀状」や「喪中」「寒中見舞い」等に関する記事コンテンツのページ作成のディレクションを行いました。</p>
            <p>
              <span class="works__section-label">Before</span>
              毎年ユーザー離れの傾向にあり新規顧客が増えにくく、コアユーザーは他社競合からの乗り換えで獲得することが重要になっていた。<br>
              大手競合に比べるとサービス的にはまだ知名度が低く、記事コンテンツによる流入でPV・UUを増加させユーザー獲得に繋げる目的でコンテンツを追加。
            </p>
            <p>
              <span class="works__section-label">After</span>
              競合調査とGoogleキーワードプランナーを使用しキーワードを選定し、外注ライターへ執筆発注。<br>
              記事コンテンツのデザイン・コーディングも担当。<br>
              シーズンの始まる10月より前の9月ごろから記事掲載をスタートし、12月の拡販期には一ヶ月で約40万PVを獲得。なかでも「年賀状に添える一言メッセージ」という記事は関連キーワードで1、2位に表示され、26万PVほどで数字を大きく伸ばした。
            </p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">そのほかLPデザイン・クリエイティブ作成</h2>
            <p>新規獲得用のリスティングLP、キャンペーンLPやバナーのデザインを担当しました。</p>
            <ul class="works__section-list">
              <li>
                新規LP<br>
                <a href="https://glam-print.com/lp/new" target="_blank">https://glam-print.com/lp/new</a>
              </li>
              <li>
                作ります宣言キャンペーンLP<br>
                <a href="https://glam-print.com/lp/declare" target="_blank">https://glam-print.com/lp/declare</a>
              </li>
              <li>
                デビューキャンペーンLP<br>
                <a href="https://glam-print.com/lp/debut" target="_blank">https://glam-print.com/lp/debut</a>            
              </li>
            </ul>
          </div>

          <div class="works__section-img">
            <img src="/img/works/img_works_gp3.png" alt="LPデザインなど" width="1000" height="563">
            <div class="works__img-description">新規獲得リスティング用LP（左）キャンペーンLP（中央）バナー類（右）</div>
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
