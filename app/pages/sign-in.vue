<template>
  <div class="flex flex-col h-full items-center justify-center gap-4 p-4">
    <UPageHeader title="Join us today !" />
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Sign in"
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
      />
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import type { Schema } from 'untyped';
import { ref } from 'vue'

definePageMeta({
  name: "Sign in",
  layout: "default"
});

const route = useRoute();
const toast = useToast()

const fields = [
{
  name: 'username',
  label: 'Username',
  type: 'text',
  placeholder: 'Enter your username',
  required: true
}, 
{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, 
{
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}, 
{
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}]

const onSubmit = (payload: FormSubmitEvent<Schema>) => {
  console.log('Submitted', payload)
}
</script>

<style scoped>
</style>
