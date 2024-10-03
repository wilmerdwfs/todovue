<template>
  <a 
    class="button"
    @click="handleClick" 
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
     text: {
      type: String,
      required: true,
      default: ''
    },
    click: {
      type: Function,
      required: true
    },

  },
  
  setup(props) {
    const handleClick = () => {
      props.click();
    }

    return { handleClick };
  },
}
</script>

<style scoped>
.button {
  padding: 10px 20px;
  background-color: #ff3636; /* Verde */
  color: white; /* Texto blanco */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de puntero */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>