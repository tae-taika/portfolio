<template>
  <div class="home">
    <!-- <Header></Header> -->
    <TopAnimation></TopAnimation>
    <div class="home__section">
      <div class="home__section-title">Works</div>
      <div class="home__works-wrapper">
        <RouterLink to="/glamprint">
          <div class="home__works-item">
            <img src="img/works/img_works_gp.png" width="317" height="178">
            <div class="home__works-item--text">
              <p>
                年賀状作成サービス「GLAM PRINT」<br>
                <span>Pdm/Design/Cording etc.</span>
              </p>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/myjinja">
        <div class="home__works-item">
          <img src="img/works/img_works_myjinja.png" width="317" height="178">
          <div class="home__works-item--text">
            <p>
              神社ポータルサイト「My神社」<br>
              <span>Design/Cording</span>
            </p>
          </div>
        </div>
        </RouterLink>
        <RouterLink to="/mykyujin">
        <div class="home__works-item">
          <img src="img/works/img_works_mykyujin.png" width="317" height="178">
          <div class="home__works-item--text">
            <p>
              業界特化型求人サイト「My求人」<br>
              <span>Design/Cording/Director</span>
            </p>
          </div>
        </div>
        </RouterLink>           
      </div>
    </div>
    <div class="home__button-wrapper">
      <ButtonLarge
        link="/works"   
      >VIEW MORE Works</ButtonLarge>
    </div>


    <div class="home__section">
      <div class="home__section-title">Profile</div>
      <div class="home__profile-wrapper">
        <div class="home__profile-image-wrapper">
          <img src="img/img_profile.png" width="300" height="300">
        </div>
        <div class="home__profile-detail">
          <div class="home__profile-name">Miho Tanabe</div>
          <div class="home__profile-text">
            <p>1979年 神奈川県横浜市生まれ</p>
          </div>
        </div> 
      </div>
    </div>
    <div class="home__button-wrapper">
      <ButtonLarge
        link="/profile" 
      >VIEW MORE Profile</ButtonLarge>
    </div> 

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import TopAnimation from '@/components/TopAnimation.vue';
import Footer from '@/components/Footer.vue';
import ButtonLarge from '@/components/ButtonLarge.vue';
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.home{
  display: grid;
  gap: 80px;
  &__section{
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    gap: 24px;
  }
  &__section-title{
    font-family: $en-font;
    text-align: center;
    @include mediaQuery(lg){
      font-size: 32px;
    }
    @include mediaQuery(sm){
      font-size: 22px;
    }
  }
  &__button-wrapper{
    display: grid;
    align-items: center;
    justify-content: center;
  }
  &__works-wrapper{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 24px;
  }
  &__works-item{
    background: #eee;
    border-radius: 2px;
    position: relative; 
    width: 100%;
     img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
     }
  }
  &__works-item--text{
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
  &__profile-wrapper{
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 24px;
  }
  &__profile-image-wrapper{
    position: relative;
    width: 160px;
    height: 160px;
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
  &__profile-detail{
    display: grid;
    gap: 8px;
  }
}
</style>
