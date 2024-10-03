import { ref} from 'vue';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import ts from '../services/TokenService'
import {API_RUTA} from '../storage/API_RUTA'

export function useHttpGet() {
  const data = ref([]);
  const error = ref(null);
  const loading = ref();

  // Función para obtener las tareas desde el servicio
  const getData = async (url) => {
     loading.value = true;

    let token =   ts.getToken();
    if (!token) {
        token = '';
    }
    const config = {
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      //body: JSON.stringify(form)
    };

    try {
      const response = await axios.get(`${API_RUTA}`+url,config);
    
      data.value = response.data;

      

    } catch (error) {
      error.value = 'Error al obtener las tareas';
      loading.value = false; 
    } finally {
      loading.value = false; // Establecer el estado de carga a falso
    }
  };


  return {
    data,
    loading,
    error,
    getData,
  };
}