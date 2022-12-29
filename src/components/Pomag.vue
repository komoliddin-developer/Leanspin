<template>
  <section class="pomag">
    <div class="container">
        <div class="pomag__content">
            <div class="pomag__przem">
                <h2 class="pomag__title">Pomagamy rozwijać biznesy gotowe na nowe czasy</h2>
                <img src="@/assets/img/pomag/image.png" alt="" class="pomag__img">
            </div>
            <div class="pomag__maci">
                <img src="@/assets/img/pomag/image1.png" alt="" class="pomag__img">
                <p class="pomag__txt">Wierzymy, że organizacje mogą być bardziej skuteczne, a pracujący w nich ludzie żyć szczęśliwie, budować wartość i zmieniać świat na lepsze.</p>
                <div class="pomag__stepps">
                    <div class="pomag__step">
                        <img src="@/assets/img/pomag/Rectangle.svg" alt="">
                        <p class="pomag__step-txt">Przemysław Skrzek</p>
                    </div>
                    <div class="pomag__step">
                        <img src="@/assets/img/pomag/Rectangle1.svg" alt="">
                        <p class="pomag__step-txt">Maciej Gawlik</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'Pomag'
}
</script>

<style lang="scss" scoped>
    .pomag {

        .container {
            padding: 80px;
        }

        &__content {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            flex-wrap: wrap;
            row-gap: 20px;
        }
 
       &__img {
            
            object-fit: cover;
            scroll-snap-align: center;
            overflow: hidden;
        }

        &__title {
            font-size: 46px;
            line-height: 57px;
            color: #000000;
            max-width: 524px;
            width: 100%;
        }

        &__przem {
            display: grid;
            row-gap: 40px;
            margin: 0 auto;
        }

        &__maci {
            display: grid;
            row-gap: 40px;
            margin: 0 auto;
        }

        &__txt {
            font-size: 20px;
            line-height: 25px;
            color: #000000;
            max-width: 528px;
            width: 100%;
        }

        &__stepps {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        &__step {

            margin: 0 auto;


            &-txt {
                font-size: 16px;
                line-height: 21px;
                color: #000000;
            }
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
@media (max-width: 684px) {
    .container {
            padding: 30px !important;
    }
}
@media (max-width: 667px) {
    .container {
            padding: 20px !important;
    }

    .pomag__img {
        max-width: 576px;
        width: 100%;
        object-fit: cover;
        scroll-snap-align: center;
        overflow: hidden;
    }
    .pomag__title {
        font-size: 36px;
    }
}
@media (max-width: 576px) {}
@media (max-width: 480px) {}
@media (max-width: 460px) {
    .pomag__title {
        font-size: 30px;
    }
}
@media (max-width: 414px) {}
@media (max-width: 412px) {}
@media (max-width: 360px) {}
@media (max-width: 320px) {}
</style>