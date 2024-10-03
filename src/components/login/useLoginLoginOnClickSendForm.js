import { ref } from 'vue';
import { useHttpPost } from '../../hooks/useHttpPost.js';
import { useTaskEditValidateField } from './useTaskEditValidateField.js';

export function useLoginLoginOnClickSendForm() {
  const datos = ref([]);
  const errorForm = ref();

  const {handleValidateForm,error}  = useTaskEditValidateField()
  
  const useLoginLogintOnClickSendForm = async (form) => {
    const {postData,data} = useHttpPost()

    const isValid = handleValidateForm(form)

    try {
      if (isValid) {
        await postData('notas/registrar',form);
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
    handleOnClickRegister,
    errorForm
  };
}
