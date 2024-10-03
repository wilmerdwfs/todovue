import { ref } from 'vue';
import { useHttpDelete } from '../../hooks/useHttpDelete.js';

export function useTaskEditOnClickDelete() {
  const datos = ref([]);
  const errorForm = ref();
  const hiddenIds = ref([]);
  
  const handleOnClickDelete = async (id) => {
    const {deleteData,data} = useHttpDelete()

    try {

      await deleteData('notas/eliminar/'+id);

      hiddenIds.value.push(id);  // Agrega el ID a hiddenIds

      datos.value = data.value;

    } catch (err) {
      errorForm.value = err;
    }
  };
  
  return {
    datos,  
    handleOnClickDelete,
    errorForm,
    hiddenIds
  };
}
