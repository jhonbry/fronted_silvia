import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useFichaStore = defineStore('ficha', () => {
    const fichas = ref([]);
  
    const obtenerInfoFichas = async () => {
        try {
            let responseFichas = await axios.get('ficha/all');
            fichas.value = responseFichas.data.ficha;
        } catch (error) {
            throw error
        }
    };

    const postFicha = async (data) => {
        try {
            console.log('d', data);
            let res = await axios.post('ficha/guardar', data);
            return res
        } catch (error) {
            throw error
        }
    }

    const putEditarFicha = async (id, data) => {
        try {
            let res = await axios.put(`ficha/editar/${id}`, data);
            return res
        } catch (error) {
            throw error;
        }
    };

    const putInactivarArea = async (id) => {
        try {
            let r = await axios.put(`area/transporteinac/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado del bus');
        }
    }
    const putActivarBus = async (id) => {
        try {
            let r = await axios.put(`transporte/transporteact/${id}`)
            return r
        } catch (error) {
            console.log(error, 'Error al cambiar el estado del bus');
        }
    }

    return {
        fichas,
        obtenerInfoFichas, postFicha, putEditarFicha,
    };
});