<!-- src/App.vue -->
<template>
  <div>
    <LayoutView v-if="!isLoginPage">
      <HeaderHtml/>
        <div class="container">
            <router-view></router-view>
        </div>
      <FooterHtml/>
    </LayoutView>
     <!-- Contenido alternativo cuando estamos en la página de inicio de sesión -->
    <div v-else>
      <router-view></router-view> <!-- Muestra solo el componente de inicio de sesión -->
    </div>
  </div>
</template>

<script>
import LayoutView from './components/LayoutView.vue'
import FooterHtml from './components/html/FooterHtml.vue'
import HeaderHtml from './components/html/HeaderHtml.vue'

import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    LayoutView,
    FooterHtml,
    HeaderHtml,
  },
  setup() {
    const route = useRoute();

    // Computed property para verificar si estamos en la página de login
    const isLoginPage = computed(() => {
      return route.path === '/login';
    });

    return {
      isLoginPage,
    };
  },
}
</script>

