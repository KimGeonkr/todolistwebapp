<template>
  <nav id="nav">
    <h2 class="blind">Menu</h2>
    <ul class="nav__tabmenu">
      <li class="nav__tabmenu__item" :class="{ active: navIdx == 0 }">
        <router-link to="/main">
          <img
            src="https://img.icons8.com/fluent-systems-regular/124/333333/clipboard.png"
            alt="Pin Tasks"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item" :class="{ active: navIdx == 1 }">
        <router-link to="/timeTable">
          <img
            src="https://img.icons8.com/fluent-systems-regular/124/333333/overtime.png"
            alt="Timetable"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item" :class="{ active: navIdx == 2 }">
        <router-link to="/todo">
          <img
            src="https://img.icons8.com/material-rounded/124/333333/list.png"
            alt="To-do List"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item" :class="{ active: navIdx == 3 }">
        <router-link to="/search">
          <img
            src="https://img.icons8.com/fluent-systems-regular/124/333333/search.png"
            alt="Task Search"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item">
        <a href="#myinfo">
          <img
            src="https://img.icons8.com/windows/124/333333/gender-neutral-user.png"
            alt="My Information"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import router from '@/router/router';

export default {
  data() {
    return {
      navIdx: router.currentRoute.meta.navIdx,
    };
  },
};
</script>

<style scoped>
@import '~styles/navmenu.css';
</style>
