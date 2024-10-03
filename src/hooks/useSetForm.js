import { ref,onMounted } from 'vue';

export function useSetForm(initialValues = {}) {
  const form = ref({})

  const iniVal = async () => {
   form.value = initialValues;
  }

  onMounted(iniVal);

  return {
    form,  
  };
}
