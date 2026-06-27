<script setup lang="ts">

const activeLink = computed(() => {
  const router = useRouter();
  const currentPath = router.currentRoute.value.fullPath;

  return currentPath;
})

const pageTitle = computed(() => {
  const activeItem = items.find(item => item.to === activeLink.value);
  return activeItem?.label;
})

const items = [{
  label: 'Dashboard',
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
        <UDashboardNavbar :title="pageTitle" >
          <template #right>
            <UUser 
              name="Anonymous"
              description="Not logged in" 
              :avatar="{
              style: 'background-color: lightgrey; color: white'
            }" />
          </template>
        </UDashboardNavbar>
      </template>
      <template  #body>
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

