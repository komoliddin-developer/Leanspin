<template>
  <nav class="nav">
    <div class="container nav__content">
        <a href="#!" class="nav__logo"><img src="@/assets/img/nav/image.svg" alt=""></a>
        <ul class="nav__list">
            <li class="nav__item"><a href="#!" class="nav__link">KNOW-HOW</a></li>
            <li class="nav__item"><a href="#!" class="nav__link">O NAS</a></li>
            <li class="nav__item"><a href="#!" class="nav__link">BLOG</a></li>
            <li class="nav__item"><a href="#!" class="nav__link">KONTAKT</a></li>
        </ul>
        <a href="#!" class="nav__menu"><img src="@/assets/img/nav/icons8-menu-rounded-50.png"></a>
        <ul class="nav__list1">
            <li class="nav__item"><a href="#!" class="nav__link">KNOW-HOW</a></li>
            <li class="nav__item"><a href="#!" class="nav__link">O NAS</a></li>
            <li class="nav__item"><a href="#!" class="nav__link">BLOG</a></li>
            <li class="nav__item"><a href="#!" class="nav__link">KONTAKT</a></li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
name: "Nav",
}
</script>

<style lang="scss" scoped>
    .nav {
        padding: 30px 55px;

        .active {
            display: flex !important;
            display: none;
            position: fixed;
            min-height: 100vh !important;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.8);
            flex-direction: column;
            padding: 100px;
            transition: .4s;
            scale: 1;         
        }

        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        &__list1 {
            scale: 0;
            display: none;
            align-items: center;
            justify-content: space-between;
            transition: .4s;
        }

        &__list {
            display: flex;
            align-items: center;
        }

        &__link {
            padding: 30px 17px;
            font-size: 12px;
            line-height: 12px;
            letter-spacing: 1px;
            color: #FFFFFF;
        }

        &__menu {
            display: none;
            z-index: 1000;
        }
    }

    @media (max-width: 1440px) {}
    @media (max-width: 1320px) {}
    @media (max-width: 1290px) {}
    @media (max-width: 1140px) {}
    @media (max-width: 1024px) {}
    @media (max-width: 992px) {}
    @media (max-width: 850px) {}
    @media (max-width: 768px) {}
    @media (max-width: 736px) {}
    @media (max-width: 734px) {}
    @media (max-width: 684px) {}
    @media (max-width: 667px) {
        .nav__menu {
            display: flex;
        }

        .nav__list {
            display: none;
        }
    }
    @media (max-width: 576px) {
        .nav {
            padding-left: 40px;
        }
    }
    @media (max-width: 480px) {}
    @media (max-width: 460px) {}
    @media (max-width: 414px) {}
    @media (max-width: 412px) {}
    @media (max-width: 360px) {}
    @media (max-width: 320px) {}
</style>