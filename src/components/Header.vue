<template>
  <header class="header">
    <Nav/>
    <div class="container">
      <div class="header__image"><img src="@/assets/img/header/bg.png" alt="" class="header__img"></div>
      <div class="header__content">
        <div class="header__re">
          <p class="header__re-txt">Spin!</p>
          <h1 class="header__re-title">[re]designing <br> <span class="header__re-span">your business</span></h1>
        </div>
      </div>
      <div class="header__write">
        <p class="header__txt">Pomagamy rozwijać progresywne firmy, zespoły <br> i kompetencje w coraz szybciej zmieniającym się świecie.</p>
        <div class="header__write1">
          <h3 class="header__write1-title">Poznajmy się!</h3>
          <p class="header__write1-txt">Umów się na bezpłatną konsultację</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: 'Header',
  components: {
    Nav
  },
}
</script>

<style lang="scss" scoped>
  span {
    margin-left: 194px;
  }

  .container {
    position: relative;
    padding: 70px;
  }

  .header {
    background-color: #000;
    // position: relative;

    &__content {
      padding-left: 200px;
      position: absolute;
      top: 150px;
      display: flex;
      flex-direction: column;
      gap: 189px;
    }

    &__image {
      display: grid;
      place-items: center;
      
    }

    &__img {
      text-align: center;
    }

    &__re {

      &-txt {
        margin-left: 30px;
        font-size: 11px;
        line-height: 15px;
        letter-spacing: 0.2px;
        color: #999999;
      }

      &-title,
      &-span  {
        max-width: 940px;
        width: 100%;
        font-size: 114px;
        line-height: 125px;
        color: #FFFFFF;
      }

    }


    &__txt {
      font-size: 19px;
      line-height: 27px;
      color: #FFFFFF;
    }

    &__write {
      margin-top: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }

    &__write1 {
      &-title {
        font-size: 20px;
        line-height: 22px;
        color: #FFFFFF;
      }

      &-txt {
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0,2px;
        color: #999999;
      }
    }
  }
@media (max-width: 1440px) {}
@media (max-width: 1320px) {}
@media (max-width: 1290px) {
  .header__re-title,
  .header__re-span {
    font-size: 80px;
  }
}
@media (max-width: 1140px) {

}
@media (max-width: 1024px) {
  .header__content {
    padding-left: 50px;
  }
}
@media (max-width: 992px) {}
@media (max-width: 850px) {
  .header__txt {
    font-size: 16px;
  }
  .header__re-title,
  .header__re-span {
    font-size: 60px;
  }
  span {
    margin-left: 50px;
  }
  .header__write {
    margin-top: 30px;
  }
  .container {
    padding-top: 20px;
  }
}
@media (max-width: 768px) {}
@media (max-width: 736px) {}
@media (max-width: 734px) {}
@media (max-width: 684px) {

}
@media (max-width: 667px) {
  .header__image {
    max-width: 500px;
      width: 100%;
      overflow: hidden;
  }
  .container {
    padding-top: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 576px) {
  .container {
    padding-top: 0px;
    padding-right: 0px;
    padding-left: 40px;
    padding-bottom: 40px;
  }
  .header__content {
    padding-left: 20px;
  }
  .header__write {
    margin-top: 0px;
  }
}
@media (max-width: 480px) {
  .header__re-title,
  .header__re-span {
    font-size: 55px;
  }
}
@media (max-width: 460px) {
  .header__re-title,
  .header__re-span {
    font-size: 50px;
  }
  span {
    margin-left: 10px;
  }
  .header__txt {
    font-size: 12px;
  }
  .header__content {
    padding-left: 0px;
  }
}
@media (max-width: 414px) {}
@media (max-width: 412px) {}
@media (max-width: 360px) {
  .header__re-title,
  .header__re-span {
    font-size: 40px;
  }
  .header__txt {
    font-size: 10px;
  }
}
@media (max-width: 320px) {}
</style>