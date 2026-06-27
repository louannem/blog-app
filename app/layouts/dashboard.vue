<script setup lang="ts">
import type { NavigationMenuChildItem } from '@nuxt/ui';

const activeLink = computed(() => {
  const router = useRouter();
  const currentPath = router.currentRoute.value.fullPath;

  return currentPath;
})

const items = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: activeLink.value === "/",
  to: "/",
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  to: "/inbox",
  active: activeLink.value === "/inbox",
}, {
  label: 'Contacts',
  icon: 'i-lucide-users',
  to: "/contacts",
  active: activeLink.value === "/contacts",
}]


</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      :toggle="{
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full'
      }"
    >
      <template #header>
        <h1>Navigation</h1>
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard"  />
      </template>
      <template  #body>
        {{ activeLink }}
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

