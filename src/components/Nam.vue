<template>
  <section class="nam">
    <div class="container">
        <h4 class="nam__title">Zaufali nam</h4>
        <div class="nav__icons">
            <a v-for="(icon, idx) in icons" :key="idx" :href="icon.link" class="nam__icon" ><img :src="icon.img" alt=""></a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Nam",
data() {
    return {
        icons:[
            {
               img: require("@/assets/img/nam/Rectangle.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle1.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle2.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle3.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle4.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle5.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle6.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle7.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle8.svg"),
               link: "#!"
            },
            {
               img: require("@/assets/img/nam/Rectangle9.svg"),
               link: "#!"
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
    .nam {

        .container {
            padding: 80px;
        }

        &__content {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-size: 10px;
            line-height: 34px;
            letter-spacing: 0.44px;
            text-transform: uppercase;
            color: #E8244F;
        }

        &__icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;

        }

        &__icon {
            margin: 0 auto;
        }
    }
    @media (max-width: 667px) {
       .nam__icon {
        margin: 0 auto;
       }
       .container {
        padding: 30px !important;
    }
    }
</style>