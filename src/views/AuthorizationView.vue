<template>
  <div class="container mt-[250px] w-full max-w-[45%]">
    <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <img src="../assets/logo.png" class="w-[50px] h-[50px] m-[auto]" alt="logo">
        <h1 class="text-2xl font-bold mb-2 text-center">Sign In</h1>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Email <span class="text-red-600">*</span>
        </label>
        <input
            v-model="loginForm.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-all hover:ring-1 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:border-blue-500"
            id="email" type="email" placeholder="example@domain.com">
        <p v-if="this.v$.loginForm.email.$error" class="text-red-500 text-xs italic">
          {{ this.v$.loginForm.email.$errors[0].$message }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Password <span class="text-red-600">*</span>
        </label>
        <input
            v-model="loginForm.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-all hover:ring-1 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:border-blue-500"
            id="password" type="password" placeholder="***********">
        <p v-if="this.v$.loginForm.password.$error" class="text-red-500 text-xs italic">
          {{ this.v$.loginForm.password.$errors[0].$message }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
            @click="submitForm"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
          Log in
        </button>
        <div class="text-grey-dark">
          Don't have an account?
          <a @click="$router.push({name: 'registration'},() => {})" class="text-blue-500 hover:underline" href="#">
            Registration
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
  name: 'AuthorizationView',
  data() {
    return {
      v$: useVuelidate(),
      loginForm: {
        email: "",
        password: ""
      },
    }
  },
  validations() {
    return {
      loginForm: {
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
