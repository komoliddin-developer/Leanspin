<template>
  <footer class="footer">
    <div class="container">
        <div class="footer__hello">
            <p class="footer__write">umów się na bezpłatną konsultację</p>
            <div class="div">
                <a href="#!" class="footer__link">hello@leanspin.pl</a>
                <a href="tel:+48 534 999 080" class="footer__link">+48 534 999 080</a>
            </div>
            <div class="footer__studia">
                <p class="footer__txt">Studio LEANSPIN, Gałczyńskiego 33 <br> 52-214 Wrocław, Polska</p>
                <div class="footer__links">
                    <a href="#!" class="footer__icon"><img src="@/assets/img/footer/Vector.svg" alt=""></a>
                    <a href="#!" class="footer__icon"><img src="@/assets/img/footer/Vector1.svg" alt=""></a>
                </div>
            </div>
            <div class="footer__copy">
                <p class="footer__copy-txt">© 2021 Copyright LEANSPIN</p>
                <p class="footer__copy-txt">Polityka prywatności</p>
                <p class="footer__copy-txt">Design:Ficturo</p>
            </div>
        </div>
        <div class="footer__end">
            <h4 class="footer__title">wróć do góry</h4>
            <p class="footer__end-txt">Макет канала @figma2html</p>
        </div>
    </div>

  </footer>
</template>

<script>
export default {
name: 'Footer',
}
</script>

<style lang="scss" scoped>
    .footer {
        

        .div {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-size: 46px;
            text-align: center;
            color: #000000;

        }

        &__end {
            padding: 45px 66px 17px; 
        }

        &__end-txt {
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            color: #E4E4E4;
        }

        &__hello {
            display: flex;
            flex-direction: column;
            row-gap: 150px;
            background: #000000;
            padding: 80px;
        }

        &__write {
            font-size: 10px;
            line-height: 34px;
            letter-spacing: 0.44px;
            text-transform: uppercase;
            color: #FFFFFF;
        }

        &__link {
            font-size: 65px;
            color: #FFFFFF;
        }

        &__studia {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
        }

        &__links {
            display: flex;
            align-items: center;
            column-gap: 40px;
        }

        &__txt {
            font-size: 20px;
            color: #FFFFFF;
        }

        &__copy-txt {
            font-size: 12px;
            line-height: 17px;
            color: rgba(255, 255, 255, 0.4);
        }

        &__copy {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
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
.footer__link {
    font-size: 45px;
}
}
@media (max-width: 576px) {
    .footer__link {
    font-size: 33px;
}
.footer__txt {
    font-size: 14px;
}

.footer__hello {
    padding: 30px !important;
    row-gap: 100px;
}
}
@media (max-width: 480px) {}
@media (max-width: 460px) {}
@media (max-width: 414px) {
    .footer__txt {
    font-size: 10px;
}
.footer__hello {
    row-gap: 50px;
}
.footer__title {
font-size: 35px;
}
}
@media (max-width: 412px) {}
@media (max-width: 360px) {
    .footer__link {
    font-size: 28px;

}.footer__title {
font-size: 20px;
}
}
@media (max-width: 320px) {}
</style>