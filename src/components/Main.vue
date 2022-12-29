<template>
  <Jak/>
  <Nam/>
  <Agil/>
  <Inspiracje/>
  <Pomag/>
</template>

<script>

import Jak from '@/components/Jak.vue';
import Nam from '@/components/Nam.vue';
import Inspiracje from '@/components/Inspiracje.vue';
import Pomag from '@/components/Pomag.vue';
import Agil from '@/components/Agil.vue';


export default {
    name: 'Main',
    components: {
    Jak,
    Nam,
    Inspiracje,
    Pomag,
    Agil
},
}
</script>

<style>

</style>