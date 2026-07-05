<template>
  <div class="flex flex-col h-full items-center justify-center gap-4 p-4">
    <UPageHeader title="Welcome back !" />
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Log in"
        icon="i-lucide-user"
        :fields="fields"
        :loading="loading"
        @submit="onSubmit"
      >
        <template v-if="error?.hasError" #validation>
          <UAlert color="error" icon="i-lucide-info" :title="error?.message" />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';

definePageMeta({
  name: "Log in",
  layout: "default"
});

const route = useRoute();
const toast = useToast()
const api = useNuxtApp().$api;

const response = ref<any>(null);
const error = ref<any>({ hasError: false, message: "" });
const loading = ref<boolean>(false);

const fields = [
{
  name: 'username',
  label: 'Username',
  type: 'text',
  placeholder: 'Enter your username',
  required: true
}, 
{
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
},
]

const onSubmit = async (payload: FormSubmitEvent<{ username: string, password: string }>) => {
  loading.value = true;
  const { username, password } = payload.data;
  response.value = await api.login.post(
    { 
      username: username ?? null, 
      password: password ?? null 
    }
  ).finally(() => loading.value = false);
  
  
  if (response.value.status === 200) {
    toast.add({
      title: "Hooray !",
      description: "Successfully logged in ✨",
      color: "success",
    });

    error.value = (
      { 
        hasError: false, 
        message: "" 
      }
    );

    navigateTo("/");

    //Store session + redirect
  } else if(response.value.status === 500) {
    error.value = (
      { 
        hasError: true, 
        message: "The username and password are required." 
      }
    );
  } else {
    error.value = (
      { 
        hasError: true, 
        message: "Invalid credentials." 
      }
    );
  }
}
</script>

<style scoped>
</style>
