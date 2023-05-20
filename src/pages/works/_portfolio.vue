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
          label: 'ポートフォリオ',
        }
      ]"
    ></TheBreadCrumb>
    <div class="l-works-container">
      <div class="l-works-header">
        <div class="works__title-area">
          <h1 class="works__title">ポートフォリオ</h1>
          <div class="works__title-description">
            このサイト
          </div>
        </div>
        <div class="works__title-image">
          <img src="/img/works/img_works_portfolio.png" alt="ポートフォリオ" width="1000" height="562">
        </div>
      </div>

      <div class="l-works-main">
        <div class="works__contents">
          <div class="works__section">
            <P>転職活動のため、3年前に作ったポートフォリオサイトを基軸に再構築しました。</P>
          </div>

          <div class="works__section">
            <div class="works__summary">
              <div class="works__summary-item">
                <div class="works__summary-title">担当時期</div>
                <div class="works__summary-detail">2023年3月〜4月</div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">制作期間</div>
                <div class="works__summary-detail">隙間時間で進めて、1ヶ月ほど</div>
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
                    <li>Vue.js（Vue3）</li>
                  </ul>
                </div>
              </div>
              <div class="works__summary-item">
                <div class="works__summary-title">制作体制</div>
                <div class="works__summary-detail">
                  <ul role="list">  
                    <li>自分</li>
                    <li>元同僚（構築援助）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="works__section">
            <h2 class="works__section-title">技術スタック</h2>
            <p>実務で触れることの多くなったVue.jsを自分のプロジェクトでも使ってみたく、動作が速いと噂のCLIツールViteを使って構築しました。<br>
              開発環境の構築は専門外でしたが、同僚の助けを得て作ることができました。<br>
              Vue2かVue3か迷いましたが、長く残せるサイトにするため3を選択しました。</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">デザインコンセプト</h2>
            <p>3年前に作ったポートフォリオのカラーが気に入っていたため、そのまま使用。<br>
              余白は広めに、テキストのセクションではnoteなど 参考に読みやすい幅と行間になるよう広めにとっています。</p>
            <p>トップのアニメーションも当時作成したもので、Vue3で扱うために再度プラグインをインストールしています。（Vivusというプラグイン）</p>
          </div>

          <div class="works__section">
            <h2 class="works__section-title">Figmaデザインファイル</h2>
            <a href="https://www.figma.com/file/rnWYi2tO9UDuD4OI2SNSUj/%E7%84%A1%E9%A1%8C?node-id=148%3A653&t=pCQuibsOC0e6zQOP-1" target="_blank">https://www.figma.com/file/rnWYi2tO9UDuD4OI2SNSUj/%E7%84%A1%E9%A1%8C?node-id=148%3A653&t=pCQuibsOC0e6zQOP-1</a>
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
