<template>
  <div class="login">
    <div class="form">
        <h1>Login</h1>
        <label for="name">Nombre</label>
        <input 
          type="text" 
          name="titulo"
        />

        <label for="name">Email</label>
        <input 
          type="email" 
        />

        <label for="name">Contraseña</label>
        <input 
          type="password" 
        />
     
      <ButtonSubmit
        :click="() => handleOnClickUpdate(form, id)"  
        text='Actualizar'
        tipo=1
      />
    </div>
  </div>
</template>

<script>
import ButtonSubmit  from '../UI/ButtonSubmit';

export default {
  components: {
    ButtonSubmit
  },
  setup() {

  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
}
.form {
  width: 500px;
  height: 60%;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input{
  width: calc(100% - 20px);
}
h1{
  text-align: center;
}
</style>
