<template>
    <Header></Header>
    <TheBreadCrumb
      :links="[
        {
          url: '/',
          label: 'TOP',
        },
        {
          label: 'Profile',
        }
      ]"
    ></TheBreadCrumb>
    <div class="profile">
    <div class="l-wide">
      <div class="l-wide-container">
        <TheTitle>Profile</TheTitle>
        <div class="profile__intro">
          <div class="profile__intro-image-wrapper">
            <img src="/img/img_profile.png" width="160" height="160">
          </div>
          <div class="profile__intro-text-wrapper">
            <div class="profile__intro-name">
              田辺美穂　<span class="profile__intro-name-en">Miho Tanabe</span>
            </div>
            <div class="profile__intro-about">
              <p>
                10数年接客業に従事したのち、2015年よりWebデザイナーに転身。<br>
                これまでにクライアントワークや自社サービスで、Webデザイン/UIデザイン/コーディング/プロダクトマネジメント/コンテンツディレクションなどを経験。
              </p>
              <p>
                プライベートでは、音楽（バンドやってます）、スーパー銭湯、間取り図をみること、アニメが好き。
              </p>
            </div>
            <div class="profile__intro-sns">
              <div class="profile__intro-sns-notice">↓個人ではSNSをやっておらず、バンドメンバーとしてのアカウントです。</div>
              <div class="profile__intro-sns-icons">
                <a href="https://twitter.com/tae_taika" class="profile__intro-sns-icon" target="_blank">
                  <IconTwitter class="profile__intro-sns-item"></IconTwitter>
                </a>
                <a href="https://www.facebook.com/tae.tanabe.585" class="profile__intro-sns-icon" target="_blank">
                  <IconFaceBook  class="profile__intro-sns-item"></IconFaceBook>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="profile__section profile__about">
          <SectionTitle
            title="About"
            titlejp="私について"
          ></SectionTitle>
          <div class="profile__about-container">
            <div class="profile__about-wrapper">
              <div class="profile__about-item">
                <div class="profile__about-title"><span>1.</span>音楽への興味・バンド活動からWeb制作をはじめる</div>
                <p class="profile__about-text">
                  音楽が好きで、中学では吹奏楽部に所属し、大学時代から本格的にバンド活動をはじめました。<br>
                  当時、自分の趣味などを発信する個人サイトを公開するのが流行しており、自分も作りたい！と思い、ホームページ作成ソフトがバンドルされているMacを購入。同じ音楽が好きな人たちと交流しオフ会などもしました。<br>
                  その後オリジナルのバンドを組むことになり、本格的なWebサイトを作成するためにAdobe DreamweaverやFireworksを使いHTML、CSS、ビジュアル作成を独学で習得。<br>
                  長年続けていた接客の仕事が勤め先の都合で節目を迎えるにあたり、Web制作の道に進むことを決心しました。
                </p>
              </div>
              <div class="profile__about-item">
                <div class="profile__about-title"><span>2.</span>職業訓練校で3ヶ月学んだのち、派遣でWeb制作の仕事へ</div>
                <p class="profile__about-text">
                  退職後一年間は雇用保険を受給とアルバイトをしながら生活し、その間にWeb制作の学習やバンド活動も含めやりたいことをやりつくしました。<br>
                  とくによい経験になったことは初めて飲食店（ラーメン屋）でアルバイトをしたことです。とても忙しい店でしたが最少人数でまわす役割分担とチームワーク、よいものを提供するために妥協しないこと、もてなしの精神などは、現在の仕事でも大切にしていることです。<br>
                  雇用保険受給の最後の三ヶ月間、職業訓練校でHTML、CSS、JQueryを用いたコーディングスキル、PhotoshopやIllustratorなどのアプリケーションの操作を学びました。<br>
                  その後、学校の斡旋でWeb系の派遣会社に登録し、派遣社員としてWeb制作の仕事を始めました。
                </p>
              </div>              
            </div>
            <div class="profile__about-wrapper">
              <div class="profile__about-item">
                <div class="profile__about-title"><span>3.</span>派遣2社での経験から、サービス志向のデザイナーへ</div>
                <p class="profile__about-text">
                  派遣1社目として、財務や会計システムを提供する企業に入社。コーポレートサイト運用・更新・LPデザインなどを担当しました。<br>
                  ルーティンワークが多くサービスの性質的に求められるデザインが固定化されており、もっと色々なデザインをしてみたいと感じたため、2社目にはWeb制作会社へ入社。<br>
                  大手代理店から様々な業界のクライアント案件が入っており、いろいろなジャンルのデザインを経験することができましたが、「作って終わり」であること、サービスに踏み込んだデザインを行ってみたいと思い、転職を決意しました。
                </p>
              </div>
              <div class="profile__about-item">
                <div class="profile__about-title"><span>4.</span>自社サービスを運営する事業会社で幅広い業務を担当</div>
                <p class="profile__about-text">
                  複数の口コミサイトなどを運営する事情会社にWebデザイナー/コーダーとして正社員入社しました。<br>
                  LPデザイン、UI改善、新規コンテンツの立案から作成、パンフレットなどの紙媒体のデザインなど、多岐にわたる業務を担当。<br>
                  事業のひとつである年賀状事情ではプロダクトマネージャーを任され、サービス全体を自ら作り上げるプロジェクトを経験しました。<br>
                  会社が新規事業を展開していくなか複数のプロダクトを兼任で担当することが多くなり、ひとつのプロダクトに集中してよりよいサービスをつくっていきたい、同じ目線をもった仲間とじっくりと取り組みたいと思うようになりました。
                </p>
              </div>
            </div>
          </div>
          <div class="profile__about-container">
            <div class="profile__about-item">
              <div class="profile__about-title"><span>5.</span>今後やりたいこと</div>
              <p class="profile__about-text">
                なんのために・だれのためにやるのかというミッションが明確なことと、チームあるいは会社全体が同じ意識をもって取り組んでいることが、良い結果を生むために必要なのではないかと思います。<br>
                自分にとって良いデザインを作る指標もそこにあると信じており、小さな改善もその指標のもとにこだわり、本当に必要なデザインなのかを自問自答、もしくはチームで考えていけるような仕事がしたいです。<br>
                自社のプロダクトに愛がある企業やチームのなかで、自分のスキルや経験を総動員して貢献できればと考えています。
            </p>
            </div>  
          </div>
        </div>

        <div class="profile__section profile__ability">
          <SectionTitle
            title="Ability"
            titlejp="私のできること"
          ></SectionTitle>
          <div class="profile__ability-container">
            <div class="profile__ability-wrapper">
              <div class="profile__ability-item">
                <h3 class="profile__ability-name">
                  Webデザイン
                </h3>
                <div class="profile__ability-text">
                  ランディングページのデザインやリスティングバナー制作、記事コンテンツアイキャッチなど。<br>
                  訴求目的に応じた構成と、Saas系/toCなどのターゲットを意識したデザインを心がけています。
                </div>
              </div>

              <div class="profile__ability-item">
                <h3 class="profile__ability-name">
                  UIデザイン
                </h3>
                <div class="profile__ability-text">
                  ユーザー視点に立ち、ユーザーが達成したいゴール・プロダクトが達成すべきゴールを見据えたUIデザインを行います。<br>
                  ポータルサイト、toC向けの印刷サービスサイトなどを作成してきました。
                </div>
              </div>

              <div class="profile__ability-item">
                <h3 class="profile__ability-name">
                  グラフィックデザイン
                </h3>
                <div class="profile__ability-text">
                  ユーザー向けの郵送DMやリーフレットなどの紙媒体、年賀状テンプレート作成など。<br>
                  プライベートでは自身のバンドのライブやアルバムリリースフライヤーなども手がけました。
                </div>
              </div>
            </div>

            <div class="profile__ability-wrapper">
              <div class="profile__ability-item">
                <h3 class="profile__ability-name">
                  コーディング
                </h3>
                <div class="profile__ability-text">
                  HTML5/CSS3を用いたwebサイトのコーディングができます。<br>
                  これまでの業務ではBEM+Scss記法がメイン。まだまだ勉強中ですがVue.jsでコンポーネントの作成なども少し経験しました。
                </div>
              </div>

              <div class="profile__ability-item">
                <h3 class="profile__ability-name">
                  ディレクション
                </h3>
                <div class="profile__ability-text">
                  サービスの追加施策や新規開発の要件定義・タスクとスケジュール管理などのディレクションを行います。<br>
                  SEO対策のためのメディア記事のキーワード・記事構成・校正などのメディアコンテンツのディレクションと自ら執筆もします。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="profile__section profile__skills">
          <SectionTitle
            title="Skill & Tools"
            titlejp="スキルと使えるツール"
          ></SectionTitle>
          <div class="profile__skills-wrapper">
            <div class="profile__skills-item">
              <img src="/img/profile/img_profile_ps.svg"  class="profile__skills-item-img" width="80" height="80" alt="Photoshop">
              <div class="profile__skills-detail">
                <div class="profile__skills-name">
                  Photsohop
                </div>
                <div class="profile__skills-notice">
                  レタッチなど
                </div>
              </div>
            </div>

            <div class="profile__skills-item">
              <img src="/img/profile/img_profile_ai.svg"  class="profile__skills-item-img" width="80" height="80" alt="Illustrator">
              <div class="profile__skills-detail">
                <div class="profile__skills-name">
                  Illustrator
                </div>
                <div class="profile__skills-notice">
                  文字タイトル<br>作成など
                </div>
              </div>
            </div>

            <div class="profile__skills-item">
              <img src="/img/profile/img_profile_xd.svg"  class="profile__skills-item-img" width="80" height="80" alt="XD">
              <div class="profile__skills-detail">
                <div class="profile__skills-name">
                  XD
                </div>
                <div class="profile__skills-notice">
                  WFやカンプ<br>デザイン全般
                </div>
              </div>
            </div>

            <div class="profile__skills-item">
              <img src="/img/profile/img_profile_pr.svg"  class="profile__skills-item-img" width="80" height="80" alt="Premier">
              <div class="profile__skills-detail">
                <div class="profile__skills-name">
                  Premier
                </div>
                <div class="profile__skills-notice">
                  趣味で少し
                </div>
              </div>
            </div>

            <div class="profile__skills-item">
              <img src="/img/profile/img_profile_figma.svg"  class="profile__skills-item-img" width="80" height="80" alt="Figma">
              <div class="profile__skills-detail">
                <div class="profile__skills-name">
                  Figma
                </div>
                <div class="profile__skills-notice">
                  XDから移行中
                </div>
              </div>
            </div>            
          </div>
          <div class="profile__skills-other">
            HTML / CSS / Vue.js / Github / VScode / Slack / Asana / Dropbox<br>
            Google Workspace / Google Analytics(UA) / Google Search Console
          </div>
        </div>

        <div class="profile__section profile__matrix">
          <SectionTitle
            title="Matrix"
            titlejp="志向と能力の自己分析図"
          ></SectionTitle>
          <div class="profile__matrix-graph">
            <img src="/img/profile/img_profile_matrix.png" width="732" height="566" alt="志向と能力の自己分析図">
          </div>
        </div>

        <div class="profile__section profile__career">
          <SectionTitle
            title="Job carrer"
            titlejp="これまでの職務経歴"
          ></SectionTitle>
          <div class="profile__career-wrapper">
            <div class="profile__career-item">
              <div class="profile__career-date">
                <div class="profile__career-year">
                  2002
                </div>
                <div class="profile__career-point"></div>
                <div class="profile__career-month">
                  03
                </div>
              </div>
              <div class="profile__career-detail-wrapper">
                <div class="profile__career-detail">
                  <h4 class="profile__career-topic">
                    東海大学文学部文明学科　卒業
                  </h4>
                  <div class="profile__career-text">
                    西アジア（イスラム文化など）を学ぶ。マンドリンという楽器のサークルに所属。バンド活動も。
                  </div>
                </div>                
              </div>
            </div>

           <div class="profile__career-item">
              <div class="profile__career-date">
                <div class="profile__career-year">
                  2002
                </div>
                <div class="profile__career-point"></div>
                <div class="profile__career-month">
                  08
                </div>
              </div>
              <div class="profile__career-detail-wrapper">
                <div class="profile__career-detail">
                  <h4 class="profile__career-topic">
                    有限会社グラストン<br>
                    携帯ショップスタッフ（アルバイト）
                  </h4>
                  <div class="profile__career-period">約12年間</div>
                  <div class="profile__career-text">
                    auショップスタッフとして勤務。新規契約・機種変更・修理受付などのカウンター接客業務を行う。<br>
                    ガラケー全盛期からスマホへの移行期、iPhoneの日本発売開始対応などを経験。<br>
                    後進指導や店内POPの作成なども担当。
                  </div>
                </div>                
              </div>
            </div>

            <div class="profile__career-item">
              <div class="profile__career-date">
                <div class="profile__career-year">
                  2014
                </div>
                <div class="profile__career-point"></div>
                <div class="profile__career-month">
                  01
                </div>                
              </div>
              <div class="profile__career-detail-wrapper">
                <div class="profile__career-detail">
                  <h4 class="profile__career-topic">
                    有限会社グラストン退職、一年間無職に
                  </h4>
                  <div class="profile__career-text">
                    会社の事業撤退により退職、雇用保険で約一年間を過ごす。<br>
                    その間、いままで経験がなくやってみたかった「飲食バイト」を経験。ラーメン屋で給仕や仕込み、店のSNSなども担当。<br>
                    雇用保険制度の受給期限をぎりぎりまで延長し、趣味だったWebサイト制作を仕事にするべく職業訓練校に3ヶ月間通学。
                  </div>
                </div>                
              </div>
            </div>

            <div class="profile__career-item">
              <div class="profile__career-date">
                <div class="profile__career-year">
                  2015
                </div>
                <div class="profile__career-point"></div>
                <div class="profile__career-month">
                  03
                </div>                
              </div>
              <div class="profile__career-detail-wrapper">
                <div class="profile__career-detail">
                  <h4 class="profile__career-topic">
                    株式会社ミロク情報サービス<br>
                    Webオペレーター（派遣社員）
                  </h4>
                  <div class="profile__career-period">約3年間</div>
                  <div class="profile__career-text">
                    <p>
                      会計システムソリューションなどを扱うIT企業に派遣社員として就業。<br>
                      コーポレートサイトやシステム利用者向けのサイトの更新運用・コンテンツ制作・リスティングバナー制作などを担当。
                    </p>

                  </div>
                </div>                
              </div>
            </div>

            <div class="profile__career-item">
              <div class="profile__career-date">
                <div class="profile__career-year">
                  2016
                </div>
                <div class="profile__career-point"></div>
                <div class="profile__career-month">
                  10
                </div>                
              </div>
              <div class="profile__career-detail-wrapper">
                <div class="profile__career-detail">
                  <h4 class="profile__career-topic">
                    株式会社テイ・デイ・エス<br>
                    Webデザイナー（派遣社員）
                  </h4>
                  <div class="profile__career-period">約3年間</div>
                  <div class="profile__career-text">
                    <p>
                      クライアントワーク中心の制作会社に派遣のWebデザイナーとして就業。<br>
                      正社員デザイナーの補佐としてバナー量産やスポットのLPデザインなど、定期更新の運用案件（コーディング含む）も担当。<br>
                      代理店担当者と直接やりとりすることもあり、ディレクター的な業務も行なった。
                    </p>
                    <p>
                      実績：中京銀行ローンLPデザイン、ローソン銀行アプリ紹介クリエイティブなど。
                    </p>
                  </div>
                </div>                
              </div>
            </div>

            <div class="profile__career-item">
              <div class="profile__career-date">
                <div class="profile__career-year">
                  2019
                </div>
                <div class="profile__career-point"></div>
                <div class="profile__career-month">
                  10
                </div>                
              </div>
              <div class="profile__career-detail-wrapper">
                <div class="profile__career-detail">
                  <h4 class="profile__career-topic">
                    株式会社TeraDox<br>
                    Webデザイナー/コーダー/ディレクター/PdM（正社員）
                  </h4>
                  <div class="profile__career-period">約3年間</div>
                  <div class="profile__career-text">
                    <p>
                      いくつかのポータルサイト等を運営する事業会社に正社員として入社。<br>
                      バナーやLP制作、UI改善、紙媒体デザインから、徐々に職務が広がりプロダクトのひとつである年賀状印刷サービスはプロダクトマネージャーとしてサービス企画をしつつデザイン業務なども担当。<br>
                      SEO対策のためのコンテンツ追加施策では記事ディレクションなども務めた。
                    </p>
                    <p>
                      実績：「GLAM PRINT」リニューアル/マネジメント、「My神社」デザイン、「My求人」デザインなど
                    </p>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import TheBreadCrumb from '@/components/TheBreadCrumb.vue';
  import Footer from '@/components/Footer.vue';
  import TheTitle from '@/components/TheTitle.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import IconTwitter from '@/components/icons/IconTwitter.vue';
  import IconFaceBook from '@/components/icons/IconFacebook.vue';
</script>


<style lang="scss" scoped>
  @import '@/assets/scss/variables';
  @import '@/assets/scss/layout';
  
  .profile{
    display: grid;
    align-items: center;
    justify-content: center;
    @include mediaQuery(sm){
      width: 100%;
      line-height: 1.8;
    }
    &__section{
      display: grid;
      gap: 40px;
    }
    &__intro{
      display: grid;
      grid-template-columns: 160px 1fr;
      column-gap: 40px;
      justify-content: center;
      @include mediaQuery(sm){
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
        row-gap: 24px;
      }
    }
    &__intro-image-wrapper{
      position: relative;
      width: 160px;
      height: 160px;
      margin: 0 auto;
      &::before{
        content: "";
        display: block;
        padding-top: 100%;
      }
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        margin: auto;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    &__intro-text-wrapper{
      display: grid;
      gap: 8px;
    }
    &__intro-name{
      font-size: 22px;
      font-weight: 400;
    }
    &__intro-name-en{
      font-family: $en-font;
      font-size: 16px;
    }
    &__intro-about{
      display: grid;
      gap: 16px;
    }
    &__intro-sns{
      display: grid;
      gap: 8px;
      @include mediaQuery(sm){
        gap: 12px;
      }
    }
    &__intro-sns-notice{
      font-size: 12px;
    }
    &__intro-sns-icons{
      display: grid;
      grid-template-columns: max-content max-content;
      column-gap: 16px;
    }
    &__intro-sns-item{
      width: 24px;
      height: 24px;
      transition: 0.3s all;
      &:hover{
        fill: $green-light;
      }
    }
    &__about-container{
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 24px;
      @include mediaQuery(sm){
        grid-template-columns: 1fr;
      }
    }
    &__about-wrapper{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      gap: 80px;
      @include mediaQuery(sm){
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }
    &__about-item{
      line-height: 2;
      max-width: 560px;
      @include mediaQuery(sm){
        max-width: max-content;
      }
    }
    &__about-title{
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      @include mediaQuery(sm){
        align-items: baseline;
        padding-bottom: 16px;
      }
      span{
        font-family: $en-font;
        font-size: 30px;
        padding-right: 8px;
        position: relative;
        &:after{
          content: "";
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 40px;
          background-color: $green-light;
          display: block;
          top: 8px;
          z-index: -1;
        }
      }
    }
    &__about-text{
      padding-left: 48px;
      @include mediaQuery(sm){
        padding-left: 32px;
      }
    }
    &__ability-container{
      display: grid;
      row-gap: 24px;
    }
    &__ability-wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px,384px));
      justify-content: center;
      align-items: center;
      gap: 24px;
      @include mediaQuery(sm){
        grid-template-columns: 1fr;
      }
    }
    &__ability-item{
      height: 100%;
      background: $gray-blue;
      border-radius: 4px;
      padding: 16px;
      position: relative;
    }
    &__ability-name{
      text-align: center;
      padding-bottom: 32px;
      &::after{
        content: "";
        width: 36px;
        height: 4px;
        display: block;
        position: absolute;
        background: $green-light;
        left: calc(50% - 18px);
        margin-top: 12px;
      }
    }
    &__skills-wrapper{
      display: grid;
      grid-template-columns: repeat(5, 120px);
      justify-content: center;
      gap: 80px;
      @include mediaQuery(sm){
        grid-template-columns: repeat(3, 80px);
        gap: 24px;
      }
    }
    &__skills-item{
      display: grid;
      grid-template-rows: 80px 1fr;
      text-align: center;
      align-items: flex-start;
      gap: 16px;
    }
    &__skills-item-img{
      justify-self: center;
      width: 80px;
      height: 80px;
    }
    &__skills-detail{
      display: grid;
      @include mediaQuery(sm){
        font-size: 12px;
      }
    }
    &__skills-name{
      font-weight: bold;
    }
    &__skills-notice{
      @include mediaQuery(sm){
        font-size: 12x;
        line-height: 1.2;
      }
    }
    &__skills-other{
      text-align: center;
      font-weight: bold;
      @include mediaQuery(sm){
        font-size: 14px;
      }
    }
    &__matrix{
      display: grid;
      align-items: center;
      justify-content: center;
      width: 60%;
      margin: 0 auto;
      @include mediaQuery(sm){
        width: 100%;
      }
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    &__career-wrapper{
      display: grid;
      @include mediaQuery(sm){
        row-gap: 24px;
      }
    }
    &__career-item{
      display: grid;
      grid-template-columns: max-content 1fr;
      column-gap: 24px;
      @include mediaQuery(sm){
        grid-template-columns: 1fr;
        row-gap: 16px;
      }
    }
    &__career-date{
      position: relative;
      display: grid;
      grid-template-columns: 80px 24px 30px;
      column-gap: 24px;
      align-items: center;
      @include mediaQuery(sm){
        column-gap: 12px;
        grid-template-columns: max-content 8px max-content;
      }
      &::before{
        content: "";
        position: absolute;
        border-left: 1px solid $black;
        top: 0;
        bottom: 0;
        left: 115px;
        height: 100%;
        @include mediaQuery(sm){
          content: none;
         }
      }
    }
    &__career-year{
      width: 80px;
      font-family: $en-font;
      font-size: 32px;
      font-weight: bold;
      @include mediaQuery(sm){
        width: fit-content;
        font-size: 20px;
      }
    }
    &__career-point{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: $green-light;
      z-index: 1;
      @include mediaQuery(sm){
        width: 8px;
        height: 8px;
      }
    }
    &__career-month{
      font-family: $en-font;
      font-size: 24px;
      font-weight: bold;
      @include mediaQuery(sm){
        font-size: 20px;
      }
    }
    &__career-detail-wrapper{
      padding: 24px 0;
      @include mediaQuery(sm){
        padding: 0;
      }
      &:last-of-type{
        padding: 24px 0 0;
        @include mediaQuery(sm){
          padding: 0;
        }
      }
    }
    &__career-detail{
      display: grid;
      gap: 8px;
      background: $gray-blue;
      padding: 24px;
    }
    &__career-period{
      color: $gray-light;
    }
    &__career-text{
      line-height: 1.6;
      display: grid;
      gap: 14px;
    }
    &__career-now{
      display: block;
      padding: 2px 8px;
      background: $gray-light;
      color: $white;
      border-radius: 4px;
      width: fit-content;
    }
  }
</style>

