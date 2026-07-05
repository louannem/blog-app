<template>
  <div v-if="!loading" class="">
    <UScrollArea 
      id="dashboard"
      v-slot="{ item, index }" 
      :items="cards" 
      orientation="vertical"
      :virtualize="{
        gap: 16,
        lanes: 3,
        estimateSize: 300
      }"
    >
    <UPageCard
      v-bind="item"
      :style="{
        height: `${item.height}px`,
      }"
    >
  
    <template #footer>
      <div v-if="item.user" class="blog-post-footer">
        <UUser v-bind="item.user" />
      </div>
    </template>
  
      
    </UPageCard>
  </UScrollArea>
  <UPageHero v-bind="heroAfterScroll" />
  </div>
  <div class="dashboard-skeleton">
    <USkeleton v-for="card of cards" class="w-[250px]" :style="{
      height: `${card.height}px`
    }" />
  </div>
</template>

<script setup>

  definePageMeta({
    name: "Dashboard",
    layout: "dashboard"
  });

  let loading = ref(true);

  let cards = [
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-lucide-book-open-text",
      user: {
        name: "Anonymous user",
        avatar: "style: 'background-color: lightgrey; color: white'"
      }
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-lucide-book-open-text",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-lucide-book-open-text",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-lucide-book-open-text",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-lucide-book-open-text",
    },
    {
      title: "Card",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus sodales odio, vel porta massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vulputate finibus nulla nec ornare. Curabitur in efficitur justo. Vivamus ultrices magna odio, nec laoreet turpis pulvinar rhoncus.",
      to: "/",
      icon: "i-lucide-book-open-text",
    },
  ];

  const heights = [120, 280, 340, 400];
  const userProfiles = [
    { 
      name: 'Mia Chen', 
      avatar: {
        src: 'https://i.pravatar.cc/100?img=32'
      } 
    },
    { 
      name: 'Alex Rivera', 
      avatar: {
        src: 'https://i.pravatar.cc/100?img=12',
        } 
      },
    { 
      name: 'Jordan Lee', 
      avatar: {
        src: 'https://i.pravatar.cc/100?img=47'
      } 
    }
  ];
  const cardIndexesWithUsers = [0, 2, 5];

  const getHeights = (index) => {
    const seed = (index * 11 + 7) % 17;
    return heights[seed % heights.length];
  }
  
  cards = cards.map((card, index) => {
    const cardUser = cardIndexesWithUsers.includes(index)
      ? userProfiles[cardIndexesWithUsers.indexOf(index)]
      : undefined;

    return {
      ...card,
      height: getHeights(index),
      ...(cardUser ? { user: cardUser } : {})
    }
  })

  const heroAfterScroll = {
    title: "Lorem ipsum",
    description: "Nostrud ut exercitation ullamco reprehenderit. Officia elit qui aute incididunt cillum eu fugiat. Nostrud deserunt sint nostrud ipsum est mollit commodo aliqua duis cupidatat dolore nisi.",
    links: [
      {
        label: "Sign in",
        color: "primary",
        trailingIcon: "i-lucide-arrow-right",
        to: "/sign-in",
      }
    ]
  }

  onMounted(() => {
    console.log(loading);
    setTimeout(() => {
      loading.value = false;
      console.log(loading);
    }, 1000 * 5);
  })

</script>