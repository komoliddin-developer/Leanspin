<template>
  <section class="inspiracje">
    <div class="container" >
        <div class="inspiracje__nac">
            <div class="inspiracje__card" v-for="(card, idx) in cards" :key="idx">
                <img :src="card.img" alt="" class="inspiracje__img">
                <p class="inspiracje__txt">{{ card.txt }}</p>
                <h4 class="inspiracje__title">{{ card.title }}</h4>
            </div>
            <div class="inspiracje__nac-write">
                <h3 class="inspiracje__nac-title">Inspiracje</h3>
                <p class="inspiracje__nac-txt">Rozwój to umiejętność patrzenia na świat przez pryzmat różnorodności doświadczeń otaczających nas osób. Dzielimy się tym, co nas „kręci” i dziękujemy za wszelkie inspiracje, które nadają sens naszym działaniom.</p>
            </div>
        </div>
        <div class="inspiracje__cardsa" >
            <div class="inspiracje__carda" v-for="(carda, idx) in cardas" :key="idx">
                <img :src="carda.img" alt="" class="inspiracje__img">
                <p class="inspiracje__txt">{{ carda.txt }}</p>
                <h4 class="inspiracje__title">{{ carda.title }}</h4>
            </div>
        </div>
        <div class="inspiracje__pablo">
            <p class="inspiracje__pablo-txt">„Inspiracja istnieje, ale musi zastać cię przy pracy!” – Pablo Picasso, 1881-1973 n.e.</p>
            <div class="inspiracje__cards">
                <div class="inspiracje__card" v-for="(carda, idx) in cardsa" :key="idx">
                    <img :src="carda.img" alt="" class="inspiracje__img">
                    <p class="inspiracje__txt">{{ carda.txt }}</p>
                    <h4 class="inspiracje__title">{{ carda.title }}</h4>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'Inspiracje',
data() {
    return{
        cards: [
            {
                img: require("@/assets/img/inspiracje/Rectangle.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
        ],
        cardas: [
            {
                img: require("@/assets/img/inspiracje/Rectangle1.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
            {
                img: require("@/assets/img/inspiracje/Rectangle2.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
            {
                img: require("@/assets/img/inspiracje/Rectangle3.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
            {
                img: require("@/assets/img/inspiracje/Rectangle4.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
        ],
        cardsa: [
            {
                img: require("@/assets/img/inspiracje/Rectangle5.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
            {
                img: require("@/assets/img/inspiracje/Rectangle6.png"),
                txt: "empowerment   przywództwo   zespół",
                title: "Braterstwo broni ..."
            },
        ],
    }
}
}
</script>

<style lang="scss" scoped>
    .inspiracje {

        .container {
            display: flex;
            flex-direction: column;
            row-gap: 30px;
            padding: 87px;
        }

        &__cardsa,
        &__cards {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 30px;
            
        }

        &__cards {
            margin: 0 auto;
            flex-wrap: wrap;
        }

        &__cardsa {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
        }

        &__carda {
            flex-shrink: 0;
            max-width: 294px;
            width: 100%;
            overflow: hidden;
            object-fit: cover;
            scroll-snap-align: center;
        }

        &__card {
            margin: 0 auto;
        }

        &__pablo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;

            &-txt {
                font-size: 20px;
                line-height: 26px;
                color: #000000;
                max-width: 520px;
                margin: 0 auto;
                text-align: center;
            }
        }

        &__txt {
            font-size: 10px;
            line-height: 13px;
            color: rgba(0, 0, 0, 0.5);
        }

        &__title {
            font-size: 12px;
            line-height: 17px;
            color: #000000;
        }
        &__nac {
            display: flex;
            align-items: flex-end;
            column-gap: 80px;
            flex-wrap: wrap;

            &-title {
                font-size: 114px;
                line-height: 122px;
                color: #000000;
            }

            &-txt {
                font-size: 20px;
                line-height: 26px;
                color: #000000;
                max-width: 800px;
            }

            &-write {
                padding-bottom: 40px;
            }
        }
    }
@media (max-width: 1440px) {}
@media (max-width: 1320px) {}
@media (max-width: 1290px) {
    .inspiracje__nac-txt {
        font-size: 16px;
    }
    .inspiracje__nac-title {
        font-size: 90px;
    }
}
@media (max-width: 1140px) {}
@media (max-width: 1024px) {
    
}
@media (max-width: 992px) {
    .inspiracje__nac-txt {
        font-size: 14px;
    }
    .inspiracje__nac-title {
        font-size:60px;
    }
    .inspiracje__nac {
        column-gap: 30px;
    }
}
@media (max-width: 850px) {}
@media (max-width: 768px) {}
@media (max-width: 736px) {}
@media (max-width: 734px) {}
@media (max-width: 684px) {
    .inspiracje__nac-title {
        text-align: center;
    }
    .container {
        padding: 20px 20px !important;
    }
}
@media (max-width: 667px) {}
@media (max-width: 576px) {}
@media (max-width: 480px) {
    .inspiracje__pablo-txt {
        font-size: 14px;
    }
}
@media (max-width: 460px) {}
@media (max-width: 414px) {}
@media (max-width: 412px) {}
@media (max-width: 360px) {}
@media (max-width: 320px) {}
</style>