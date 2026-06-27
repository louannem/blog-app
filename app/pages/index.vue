<template>
  <UScrollArea 
    id="dashboard"
    v-slot="{ item, index }" 
    :items="cards" 
    orientation="vertical"
    :virtualize="{
      gap: 16,
      lanes: 3,
      estimateSize: 480
    }"
  >
  <UPageCard
    v-bind="item"
    :height="item.height"
  >
    
  </UPageCard>
  </UScrollArea>
</template>

<script setup>
  definePageMeta({
    name: "Dashboard",
    layout: "dashboard"
  });

  let cards = [
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-simple-icons-tailwindcss",
      user: {
        name: "Anonymous user",
        avatar: "style: 'background-color: lightgrey; color: white'"
      }
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-simple-icons-tailwindcss",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-simple-icons-tailwindcss",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-simple-icons-tailwindcss",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-simple-icons-tailwindcss",
    },
  ];

  const heights = [320, 480, 640, 800];

  const getHeights = (index) => {
    const seed = (index * 11 + 7) % 17;
    return heights[seed % heights.length];
  }
  
  cards = cards.map( (card, index) => {
    return {
      ...card,
      height: getHeights(index),
    }
  })

  const items = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`
  }))

</script>