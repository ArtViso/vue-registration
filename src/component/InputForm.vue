<template>
  <div class="mb-6">
    <label class="form-label">
      {{ label }} <span class="text-red-600">*</span>
    </label>
    <input
        :value="modelValue"
        @input='$emit("update:modelValue", $event.target.value)'
        class="form-input"
        :id="id"
        :type=type
        :placeholder=placeholder
    >
    <p v-if="checkError" class="form-error">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    checkError: {
      type: String,
      required: false
    },
    error: {
      type: String,
      default: 'Error'
    }
  },
}
</script>
