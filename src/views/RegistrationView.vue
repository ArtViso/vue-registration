<template>
  <div class="container mt-[250px] w-full max-w-[45%]">
    <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <img src="../assets/logo.png" class="w-[50px] h-[50px] m-[auto]" alt="logo">
        <h1 class="text-2xl font-bold mb-2 text-center">Sign Up</h1>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
            v-model="registerForm.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-all hover:ring-1 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:border-blue-500"
            id="username" type="text" placeholder="Username">
        <p v-if="this.v$.registerForm.name.$error" class="text-red-500 text-xs italic">
          {{ this.v$.registerForm.name.$errors[0].$message }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Email <span class="text-red-600">*</span>
        </label>
        <input
            v-model="registerForm.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-all hover:ring-1 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:border-blue-500"
            id="email" type="email" placeholder="example@domain.com">
        <p v-if="this.v$.registerForm.email.$error" class="text-red-500 text-xs italic">
          {{ this.v$.registerForm.email.$errors[0].$message }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Password <span class="text-red-600">*</span>
        </label>
        <input
            v-model="registerForm.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-all hover:ring-1 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:border-blue-500"
            id="password" type="password" placeholder="***********">
        <p v-if="this.v$.registerForm.password.$error" class="text-red-500 text-xs italic">
          {{ this.v$.registerForm.password.$errors[0].$message }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
            @click="submitForm"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
          Registration
        </button>
        <div class="text-grey-dark">
          Already have an account?
          <a @click="$router.push({name: 'authorization'},() => {})" class="text-blue-500 hover:underline" href="#">
            Log in
          </a>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'

export default {
  name: 'RegistrationView',
  data() {
    return {
      v$: useVuelidate(),
      registerForm: {
        name: "",
        email: "",
        password: ""
      },
    }
  },
  validations() {
    return {
      registerForm: {
        name: {required, minLength: minLength(2)},
        email: {required, email},
        password: {required, minLength: minLength(6)}
      },
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('successfully');
      } else {
        alert('failed')
      }
    },
  },
}
</script>
