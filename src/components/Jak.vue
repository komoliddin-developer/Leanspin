<template>
  <section class="jak">
    <div class="container jak__content">
        <h4 class="jak__write">Jak możemy pomóc</h4>
        <div class="jak__lists" v-for="(list, idx) in lists" :key="idx">
            <div class="jak__list">
                <div class="jak__div">
                    <h2 class="jak__title">{{ list.title }}</h2>
                    <p class="jak__Txt">{{ list.txt }}</p>
                </div>
                <img :src="list.img" alt="" class="jak__img">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'Jak',
data() {
    return {
        lists:[
            {
                title: "Transformacje",
                txt: "Agile Lean Brand Digital innovation",
                img: require("@/assets/img/jak/Frame.svg")
            },
            {
                title: "Wsparcie",
                txt: "Doradztwo Narzędzia Coaching menedżerski",
                img: require("@/assets/img/jak/Frame.svg")
            },
            {
                title: "Rozwój",
                txt: "Warsztaty Symulacje Szkolenia hybrydowe",
                img: require("@/assets/img/jak/Frame.svg")
            },
            {
                title: "Przedsiębiorczość",
                txt: "Mentoring Relacje wspólnicze Nowy biznes",
                img: require("@/assets/img/jak/Frame.svg")
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
   .jak {

    .container {
        padding: 80px;
    }

    &__div {
        width: 75%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    &__content {
        display: flex;
        flex-direction: column;
        row-gap: 80px;
    }

    &__write {
        font-size: 10px;
        line-height: 34px;
        letter-spacing: 0.44px;
        text-transform: uppercase;
        color: #E8244F;
    }

    &__lists {
        display: flex;
        flex-direction: column;
        column-gap: 86px;
    }

    &__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__Txt {
        font-size: 16px;
        
        color: #000000;
    }

    &__title {
        max-width: 396px;
        width: 100%;
        font-size: 46px;
        
        color: #000000;
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
    .jak__Txt {
        font-size: 12px;
    }
    .jak__title {
        font-size: 36px;
    }
    .container {
        padding: 30px !important;
    }
    .jak__content {
        row-gap: 40px;
    }
}
@media (max-width: 576px) {}
@media (max-width: 480px) {}
@media (max-width: 460px) {
    .jak__Txt {
        font-size: 10px;
    }
    .jak__title {
        font-size: 28px;
    }
}
@media (max-width: 414px) {}
@media (max-width: 412px) {}
@media (max-width: 360px) {
    .jak__Txt {
        font-size: 8px;
    }
    .jak__title {
        font-size: 20px;
    }
}
@media (max-width: 320px) {}
</style>