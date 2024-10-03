
<template>
  <ButtonNuew text="Nueva nota" />
  <div class="panel">
  <TableWrapper :headTable="['Titulo', 'Descripción', 'Fecha de creación', 'Usuario','Etiquetas','Acciones']">
     <tr 
        v-for="(task) in tasks" 
        :key="task.id"
        v-show="!hiddenIds.includes(task.id)"
      >
      <td>
        <p>{{ task.titulo}}</p> 
      </td>
      <td>
        <p>{{ task.descripcion }}</p> 
      </td>
      <td>
        <p>{{ task.fecha }}</p> 
      </td>
      <td>
        <p>{{ task.fecha }}</p> 
      </td>
      <td>
        <p>{{ task.etiquetas }}</p> 
      </td>
      <td class="container-button-actions">

        <ButtonActionEdit 
          link=''
          text="Editar"
          :noteId="task.id"
        />
        <ButtonActionDelete 
          :click="() => handleOnClickDelete(task.id,tasks)"  
          text="Eliminar"
        />

      </td>
    </tr>
  </TableWrapper>  
  </div>
  <div v-if="error" class="error">
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { useTaskList } from './useTaskList.js';
import TableWrapper  from '../UI/TableWrapper.vue';
import ButtonActionDelete  from '../UI/ButtonActionDelete.vue';
import ButtonActionEdit  from '../UI/ButtonActionEdit.vue';
import ButtonNuew  from '../UI/ButtonNew.vue';


import { useTaskEditOnClickDelete  } from './useTaskEditOnClickDelete';
const { handleOnClickDelete, hiddenIds} = useTaskEditOnClickDelete()

export default {

  components: {
    TableWrapper,
    ButtonActionEdit,
    ButtonActionDelete,
    ButtonNuew
  },

  setup() {
    const { tasks , error} = useTaskList();

    return {
      tasks,
      error,
      handleOnClickDelete,
      hiddenIds,
    };
  },
};
</script>