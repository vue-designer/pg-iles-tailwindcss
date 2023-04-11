<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: 'SampleHeroSection',
    },
  })
</script>

<template>
  <section class="bg-gray-100 relative text-gray-500">
    <div class="container mx-auto pb-24 pt-24 px-4 py-48">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="px-4 w-full lg:w-6/12">
          <p class="font-medium mb-2 text-blue-600 uppercase">The Latest</p>
          <h1 class="font-extrabold mb-4 text-6xl text-gray-800">
            The Natural Experience
          </h1>
          <p class="font-light leading-tight mb-6 text-2xl">
            Our ability to feel, act and communicate is indistinguishable from
            magic.
          </p>
          <a
            href="#"
            class="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase"
            >Get It Now</a
          >
        </div>
        <div class="p-4 w-full lg:w-6/12">
          <div class="bg-white p-4 shadow-xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/mlD9KngeV2E"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Pinegrow location map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
