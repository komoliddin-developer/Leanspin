<template>
  <section class="agil">
    <div class="container">
        <div class="agil__content">
            <ul class="agil__list">
                <li class="agil__item"><a href="#!" class="agil__link">agile</a></li>
                <li class="agil__item"><a href="#!" class="agil__link">evidence</a></li>
                <li class="agil__item"><a href="#!" class="agil__link">empowerment</a></li>
                <li class="agil__item"><a href="#!" class="agil__link">innovation</a></li>
            </ul>
            <div class="agil__write">
                <h2 class="agil__title">Czy zarządzasz w efektywny sposób?</h2>
                <p class="agil__txt">Wbuduj zwinność w DNA Twojej organizacji i osiągaj 2 razy więcej w 2 razy krótszym czasie, będąc gotowym na zmiany, które nadejdą.</p>
                <a href="#!" class="agil__write-link">Sprawdź szczegóły</a>
            </div>
        </div>
        <ul class="agil__ul">
            <li class="agil__li activ">agile</li>
            <li class="agil__li">evidence</li>
            <li class="agil__li">empowerment</li>
            <li class="agil__li">innovation</li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
name: 'Agil',
}
</script>

<style lang="scss" scoped>
    .agil {

        .activ {
            display: flex;
        }

        &__li {
            margin-top: 80px;
            font-size: 114px;
            color: #E8244F;
            display: none;
        }

        .active {
            color: #E8244F;
        }

        background: #000;

        .container {
            padding: 80px;

        }

        &__content {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 30px;
            flex-wrap: wrap;
            max-width: 865px;
            
        }

        &__list {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
        }

        &__link {
            font-size: 15px;
            color: #FFFFFF;
        }

        &__write {
            display: grid;
            row-gap: 30px;
        }

        &__title {
            font-size: 58px;
            color: #FFFFFF;
            max-width: 500px;
            width: 100%;
        }

        &__txt {
            font-size: 20px;
            color: #FFFFFF;
            max-width: 416px;
            width: 100%;
        }

        &__write-link {
            max-width: 143px;
            width: 100%;
            font-size: 16px;
            color: #FFFFFF;
            border-bottom: 1px solid #fff;
            padding: 10px 0;
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
    .agil__title {
        font-size: 40px;
    }
    .agil__txt {
        font-size: 14px;
    }
    .container {
        padding: 50px !important;
    }
}
@media (max-width: 576px) {
    .agil__title {
        font-size: 30px;
    }
    .agil__txt {
        font-size: 14px;
    }
}
@media (max-width: 480px) {}
@media (max-width: 460px) {}
@media (max-width: 414px) {}
@media (max-width: 412px) {}
@media (max-width: 360px) {
    .container {
        padding: 30px !important;
    }
}
@media (max-width: 320px) {}
</style>