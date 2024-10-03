import { ref } from 'vue';
import { useHttpPut } from '../../hooks/useHttpPut.js';
import { useTaskEditValidateField } from './useTaskEditValidateField.js';

export function useTaskEditOnClickUpdate() {
  const datos = ref([]);
  const errorForm = ref();

  const {handleValidateForm,error}  = useTaskEditValidateField()
  
  const handleOnClickUpdate = async (form,id) => {
    const {putData,data} = useHttpPut()

    const isValid = handleValidateForm(form)

    try {
      if (isValid) {
        await putData('notas/actualizar/'+id,form);
        datos.value = data.value;
      }else{

        errorForm.value = error.value
      }

    } catch (err) {
      error.value = 'Error al obtener las tareas';
    }
  };


  return {
    datos,  
    handleOnClickUpdate,
    errorForm
  };
}
