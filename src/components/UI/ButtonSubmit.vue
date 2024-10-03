<template>
  <div class="margen">
  <a @click="handleClick" 
     class="button"
  >
    {{ text }}
  </a>
  </div>
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
      // Llama a la función click pasándole los parámetros
      props.click();
    }

    return { handleClick };
  },
}
</script>


<style scoped>
.button {
  padding: 10px 20px;
  background-color: #5561ff; /* Verde */
  color: white; /* Texto blanco */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de puntero */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.margen {
  margin-top:30px;
  width: calc(100% - 20px);
  padding:20px;
  background-color:#eee;

}
</style>