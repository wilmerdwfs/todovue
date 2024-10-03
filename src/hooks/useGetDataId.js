import { ref, onMounted } from 'vue';
import { useHttpGet } from '../hooks/useHttpGet.js';

export function useGetDataId(url) {
  const data = ref([]);
  const error = ref(null);

  // Función para obtener las tareas desde el servicio
  const getDataId = async () => {
    const {getData,data:dataRequest} = useHttpGet()
    
    try {
      await getData(url);
      data.value = dataRequest.value;
      
    } catch (err) {
      error.value = 'Error al obtener las tareas';
    }
  };

  onMounted(getDataId);

  // Retornar la lógica y los datos
  return {
    data,
    error,
  };
}