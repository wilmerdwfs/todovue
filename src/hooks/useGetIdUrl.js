import { useRoute } from 'vue-router';

export function useGetIdUrl() {  

    const route = useRoute(); 
    const id = route.params.id;

 
    return {id};

}