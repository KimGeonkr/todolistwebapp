<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <PlanSearchHeader></PlanSearchHeader>
    <div id="container">
      <PlanSearch></PlanSearch>
    </div>
    <MyInfo></MyInfo>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import MyInfo from '@/components/common/MyInfo.vue';
import PlanSearchHeader from '@/components/search/PlanSearchHeader.vue';
import PlanSearch from '@/components/search/PlanSearch.vue';

export default {
  components: {
    NavMenu,
    MyInfo,
    PlanSearchHeader,
    PlanSearch,
  },
};
</script>

<style scoped>
@import '~styles/search.css';
</style>
