import { ref, onMounted } from 'vue';
import { useHttpGet } from '../../hooks/useHttpGet.js';

export function useTaskList() {
  const tasks = ref([]);
  const error = ref(null);

  // Función para obtener las tareas desde el servicio
  const fetchTasks = async () => {
    const {getData,data} = useHttpGet()
    
    try {
      await getData('notas/lista');
      tasks.value = data.value;
      
    } catch (err) {
      error.value = 'Error al obtener las tareas';
    }
  };

  // Ejecutar fetchTasks cuando el componente se monta
  onMounted(fetchTasks);

  // Retornar la lógica y los datos
  return {
    tasks,
    error,
  };
}