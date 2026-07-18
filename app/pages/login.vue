<template>
  <div class="h-full flex flex-col items-center justify-center gap-4">
    <UPageHeader title="Welcome back !" />
    <UCard class="w-full max-w-md">
      <UAuthForm v-bind="authForm" @submit="onSubmit">
        <template v-if="error.hasError" #validation>
          <UAlert
            color="error"
            variant="soft"
            :title="error.message"
          />
        </template>
      </UAuthForm>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Login",
});

const authForm = {
  icon: "i-lucide-user",
  title: "Login",
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      name: "remember-me",
      type: "checkbox",
      label: "Remember me",
    }
  ],
};

const error = ref({ hasError: false, message: "" });

const onSubmit = (payload) => {
  const { username, password, } = payload.data;

  if (!username) {
    error.value = {
      hasError: true,
      message: "The username is required",
    };
  } else if (!password) {
    error.value = {
      hasError: true,
      message: "The password is required",
    };
  }

  if (username && password) {
    error.value = {
      hasError: false,
      message: "",
    };
  }
}
</script>