<template>
  <a @click="handleClick" 
     class="button"
  >
    {{ text }}
  </a>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
     text: {
      type: String,
      required: true,
      default: ''
    },
  },

  setup() {
    const router = useRouter(); // Obtener el enrutador

    const handleClick = () => {
      router.push({ name: 'TaskList' }); // Redirigir a la página de edición
    };

    return { handleClick };
  },
}
</script>


<style scoped>
.button {
  padding: 10px 20px;
  background-color: #4CAF50; /* Verde */
  color: white; /* Texto blanco */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de puntero */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>