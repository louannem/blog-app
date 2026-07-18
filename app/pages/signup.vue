<template>
  <div class="h-full flex flex-col items-center justify-center gap-4">
    <UPageHeader title="Join us today !" />
    <UCard class="w-full max-w-md">
      <UAuthForm
        v-bind="authForm"
        @submit="onSubmit"
      >
      <template v-if="error.hasError" #validation>
        <UAlert
          color="error"
          variant="soft"
          :title="error.message"
        />
      </template>
      </UAuthForm>
    </UCard>
    <p>Already got an account ? <ULink to="/login">Login</ULink></p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  name: "Signup",
  path: "/sign-up"
})

/**
 * DATA
 */
const authForm = {
  icon: "i-lucide-user",
  title: "Sign up",
  fields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      name: "remember-me",
      type: "checkbox",
      label: "Remember me",
    }
  ],
  submit: {
    label: "Continue",
  }
}

const error = ref({ hasError: false, message: ""});


/**
 * METHOD
 */
const onSubmit = (payload) => {
  const { email, username, password } = payload.data;
  
  if( !email) {
    error.value = {
    hasError: true,
    message: "The email is required.",
    }
  } else if (!username) {
    error.value = {
      hasError: true,
      message: "The username is required.",
    };
  } else if (!password) {
    error.value = {
      hasError: true,
      message: "The password is required.",
    };
  }

  if (email && username && password) {
    error.value = {
      hasError: false,
      message: "",
    };
  }
}
</script>