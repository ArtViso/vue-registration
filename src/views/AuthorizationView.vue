<template>
  <div class="container mt-[250px] w-full max-w-[45%]">
    <form @submit.prevent="submitForm" class="form">
      <div class="mb-4">
        <img src="../assets/logo.png" class="w-[50px] h-[50px] m-[auto]" alt="logo">
        <h1 class="text-2xl font-bold mb-2 text-center">Sign In</h1>
      </div>
      <InputForm
          label="Email"
          v-model="loginForm.email"
          id="email"
          type="email"
          placeholder="example@domain.com"
          :check-error="this.v$.loginForm.email.$error"
          :error="this.v$.loginForm.email.$errors[0]?.$message"
      />
      <InputForm
          label="Password"
          v-model="loginForm.password"
          id="password"
          type="password"
          placeholder="*******"
          :check-error="this.v$.loginForm.password.$error"
          :error="this.v$.loginForm.password.$errors[0]?.$message"
      />
      <div class="flex items-center justify-between">
        <button
            @click="submitForm"
            class="form-button"
            type="button">
          Log in
        </button>
        <div class="text-grey-dark">
          Don't have an account?
          <a @click="$router.push('/')" class="text-blue-500 hover:underline" href="#">
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
import InputForm from "@/component/InputForm";

export default {
  name: 'AuthorizationView',
  components: {
    InputForm,
  },
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
