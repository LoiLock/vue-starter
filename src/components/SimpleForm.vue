<template>
  <div
    class="simple-form"
    :class="{
      'simple-form--valid': formValid,
    }"
  >
    <label>
      email

      <input
        v-model="email"
        class="form-input"
        type="email"
      >
    </label>

    <label>
      password:

      <input
        v-model="password"
        class="form-input"
        type="password"
      >
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const email = ref('');
const password = ref('');

const formValid = computed(() => !!(email.value && password.value));

</script>

<style lang="scss" scoped>
.simple-form {
  --yale-blue: #083d77ff;
  --beige: #ebebd3ff;
  --cerise: #da4167ff;
  --naples-yellow: #f4d35eff;
  --coral: #f78764ff;

  display: flex;
  flex-direction: column;
  gap: var(--spacer-10);
  align-items: center;

  color: var(--color-pink);

  // &--valid {
  //   color: green;
  //   // animation: retard 10ms infinite alternate linear;
  // }
}

.form-input {
  padding: .25rem .5rem;
  color: #1d1d1d;
  background-color: var(--beige);

  border: none;
  border-radius: .25rem;
  box-shadow: 0 2px .5rem rgba(0, 0, 0, .1);
}
</style>
