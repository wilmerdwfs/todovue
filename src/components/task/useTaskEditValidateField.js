import { ref } from 'vue';

export function useTaskEditValidateField() {
  const error = ref([]);
  
  const handleValidateForm = (form) => {
      let errors = [];
      
      if (!form.titulo) {
        errors.push('Digite el nit');
      }

      error.value = errors;

      return errors.length === 0;

  }

  return {
    handleValidateForm,
    error
  };
}
