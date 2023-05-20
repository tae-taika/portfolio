<template>
  <div class="works-top">
    <Header></Header>
    <TheBreadCrumb
      :links="[
        {
          url: '/',
          label: 'TOP',
        },
        {
          label: 'Works',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-wide">
      <div class="l-wide-container">
        <TheTitle>Works</TheTitle>

        <div class="works-top__section">
          <SectionTitle
            title="Product works & design"
            titlejp="プロジェクト全般に関わった仕事・デザイン"
          ></SectionTitle>
          <div class="works-top__wrapper">
            <RouterLink to="/glamprint">
              <div class="works-top__item">
                <img src="/img/works/img_works_gp.png" width="384" height="216">
                <div class="works-top__item--text">
                  <p>
                    年賀状作成サービス「GLAM PRINT」<br>
                    <span>Pdm/Design/Cording etc.</span>
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to="/myjinja">
            <div class="works-top__item">
              <img src="/img/works/img_works_myjinja.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  神社ポータルサイト「My神社」<br>
                  <span>Design/Cording</span>
                </p>
              </div>
            </div>
            </RouterLink>
            <RouterLink to="/mykyujin">
            <div class="works-top__item">
              <img src="/img/works/img_works_mykyujin.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  業界特化型求人サイト「My求人」<br>
                  <span>Design/Cording/Director</span>
                </p>
              </div>
            </div>
            </RouterLink>           
          </div>
        </div>
        <div class="works-top__section">
          <SectionTitle
            title="LP design"
            titlejp="ランディングページのデザイン"
          ></SectionTitle>
          <div class="works-top__wrapper">
            <RouterLink to="/daijin">
              <div class="works-top__item">
                <img src="/img/works/img_works_daijin.png" width="384" height="216">
                <div class="works-top__item--text">
                  <p>
                    電子契約システム キャンペーンLP<br>
                    <span>Design/Cording</span>
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to="/report">
            <div class="works-top__item">
              <img src="/img/works/img_works_report.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  振袖ポータルサイト 投稿写真ギャラリー<br>
                  <span>Design/Cording</span>
                </p>
              </div>
            </div>
            </RouterLink>
            <RouterLink to="/chukyo">
            <div class="works-top__item">
              <img src="/img/works/img_works_chukyo.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  中京銀行Webマイカーローン LP
                  <br>
                  <span>Design</span>
                </p>
              </div>
            </div>
            </RouterLink>           
          </div>
        </div>
        <div class="works-top__section">
          <SectionTitle
            title="Banner design & other"
            titlejp="バナーデザインそのほか"
          ></SectionTitle>
          <div class="works-top__wrapper">
            <RouterLink to="/lowson">
              <div class="works-top__item">
                <img src="/img/works/img_works_lowson.png" width="384" height="216">
                <div class="works-top__item--text">
                  <p>
                    ローソン銀行口座開設アプリ<br>
                    アプリ画面・プロモーションバナー<br>
                    <span>Design</span>
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to="/tamago">
            <div class="works-top__item">
              <img src="/img/works/img_works_tamago.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  JA全農たまごキャンペーンバナー<br>
                  <span>Design</span>
                </p>
              </div>
            </div>
            </RouterLink>
            <!-- <RouterLink to="/flyer">
            <div class="works-top__item">
              <img src="/img/works/img_works_flyer.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  ライブフライヤー<br>
                  <span>Design</span>
                </p>
              </div>
            </div>
            </RouterLink>            -->
          </div>
        </div>
        <div class="works-top__section">
          <SectionTitle
            title="Private design"
            titlejp="個人でつくったデザイン"
          ></SectionTitle>
          <div class="works-top__wrapper">
            <RouterLink to="/portfolio">
              <div class="works-top__item">
                <img src="/img/works/img_works_portfolio.png" width="384" height="216">
                <div class="works-top__item--text">
                  <p>
                    ポートフォリオ<br>
                    <span>Design/Cording</span>
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to="/annulus">
            <div class="works-top__item">
              <img src="/img/works/img_works_annulus.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  taika 5th album 特設サイト<br>
                  <span>Design/Cording</span>
                </p>
              </div>
            </div>
            </RouterLink>
            <RouterLink to="/flyer">
            <div class="works-top__item">
              <img src="/img/works/img_works_flyer.png" width="384" height="216">
              <div class="works-top__item--text">
                <p>
                  ライブフライヤー<br>
                  <span>Design</span>
                </p>
              </div>
            </div>
            </RouterLink>           
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
</script>


<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/layout';

.works-top{
  &__section{
    display: grid;
    gap: 32px;
  }
  &__wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,384px));
    justify-content: center;
    gap: 24px;
  }
  &__item{
    background: #eee;
    border-radius: 2px;
    position: relative; 
    width: 100%;
     img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
     }
  }
  &__item--text{
    background: rgba(0,0,0, .5);
    color: $white;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    transition: opacity .6s ease;
    overflow: hidden;
    border-radius: 2px;
    p{
      span{
        font-size: 12px;
      }
    }
    &:hover{
        opacity: 1;
    }
  }
}





</style>
