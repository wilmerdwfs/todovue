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
        :click="() => handleOnClickUpdate(form, id)"  
        text='Actualizar'
      />
    </form>
  </div>
</template>

<script>
import { watch } from 'vue';
import ButtonActionBack  from '../UI/ButtonActionBack.vue';
import ButtonSubmit  from '../UI/ButtonSubmit';

import { useSetForm } from '../../hooks/useSetForm';


import { useTaskEditOnClickUpdate  } from './useTaskEditOnClickUpdate';
const { handleOnClickUpdate,error, errorForm } = useTaskEditOnClickUpdate();

import { useGetDataId } from '../../hooks/useGetDataId';

import {useGetIdUrl}  from '../../hooks/useGetIdUrl';

export default {
  components: {
    ButtonActionBack,
    ButtonSubmit
  },
  
  setup() {
    const {id} = useGetIdUrl();

    const { data } = useGetDataId('notas/data-id/'+id);

    const { form } = useSetForm({
      titulo: '',
      descripcion: '',
      fecha: '',
      etiquetas: ''
    });

    // Actualizar el formulario cuando los datos estén disponibles porque la carga es asigcronica
    watch(data, (newData) => {
      if (newData) {
        form.value.titulo = newData.titulo;
        form.value.descripcion = newData.descripcion;
        form.value.fecha = newData.fecha;
        form.value.etiquetas = newData.etiquetas;
      }
    });

    return {
      form,
      handleOnClickUpdate,
      errorForm, 
      error,
      data , 
      id
    };
  }

}
</script>