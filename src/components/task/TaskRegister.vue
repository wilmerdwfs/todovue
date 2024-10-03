<template>
  <ButtonActionBack text="< Atas"/>

  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Titulo</label>
        <input 
          type="text" 
          name="titulo"
          v-model="form.titulo"  
        
        />

        <label for="name">Descripción</label>
        <input 
          type="text" 
          v-model="form.descripcion"  
        />

        <label for="name">Fecha de creación</label>
        <input 
          type="date" 
          v-model="form.fecha"
        
        />

        <label for="name">Etiquetas</label>
        <input 
          type="text" 
          v-model="form.etiquetas"        
        />
      </div> 
      
      <!-- Aquí mostramos el mensaje de error si existe -->
      <div v-if="errorForm">
        <p v-for="(error, index) in errorForm" :key="index">{{ error }}</p>
      </div>

      <ButtonSubmit
        :click="() => handleOnClickRegister(form)"  
        text='Actualizar'
      />
    </form>
  </div>
</template>

<script>
import ButtonActionBack  from '../UI/ButtonActionBack.vue';
import ButtonSubmit  from '../UI/ButtonSubmit';

import { useSetForm } from '../../hooks/useSetForm';
const { form } = useSetForm({
      titulo: '',
      descripcion: '',
      fecha: '',
      etiquetas: '',
      id:1
    });

import { useTaskEditOnClickRegister  } from './useTaskEditOnClickRegister';
const { handleOnClickRegister,error, errorForm } = useTaskEditOnClickRegister();

export default {
  components: {
    ButtonActionBack,
    ButtonSubmit
  },
  
  setup() {

    return {
      form,
      handleOnClickRegister,
      errorForm, 
      error
    };
  }

}
</script>