import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUsuarioStore = defineStore('usuario', () => {
  const usuarios = ref([]);
  const obtenerusuario = async () => {
    try {
      let responseusuario = await axios.get('usuario/usuario');
      usuarios.value = responseusuario.data.usuario;
    } catch (error) {
      throw error;
    }
  };

  const postusuario = async (data) => {
    try {
      let res = await axios.post('usuario/agregar', data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const putInactivarUsuario = async (id) => {
    try {
        let r= await axios.put(`usuario/inactivar/${id}`)
        return r
    } catch (error) {
        console.log(error, 'Error al cambiar el estado de el usuario');

    }
  };

  
  const putActivarUsuario = async (id) => {
    try {
        let r= await axios.put(`usuario/activar/${id}`)
        return r
    } catch (error) {
        console.log(error, 'Error al cambiar el estado de el usuario');
    }
  };

  const usuario = ref ([])
  const login = async (data) => {
    try {
        let r = await axios.post('usuario/login', data)
        console.log(r);
        usuario.value=r.data.usuario
        return r.status

    } catch (error) {
        console.log(error)
        return error.response.data
    }
  }
  return {
    usuarios, 
    obtenerusuario, postusuario, login,putInactivarUsuario, putActivarUsuario, 
  }
});
