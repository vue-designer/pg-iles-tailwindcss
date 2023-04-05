<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: 'CallToAction',
    },
  })
</script>

<template>
  <section class="bg-gray-800 py-20 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="px-4 py-6 w-full md:w-6/12 lg:pt-12 lg:w-4/12">
          <h2 class="font-bold mb-6 text-4xl text-white">Shop</h2>
          <img
            src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDZ8fHNob3BwaW5nfGVufDB8fHx8MTYyNjU5MTY3Ng&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=400&amp;h=500&amp;fit=crop"
            class="mb-6 w-full"
          />
          <h3 class="font-medium mb-1 text-2xl text-color3-500 text-white">
            Discover Something New
          </h3>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur ac sagittis neque, vel egestas est.
          </p>
          <a
            href="#"
            class="border font-normal hover:bg-white hover:text-gray-800 inline-block px-6 py-2 rounded text-white"
            >Explorer Now</a
          >
        </div>
        <div class="px-4 py-6 w-full md:w-6/12 lg:w-4/12">
          <h2 class="font-bold mb-6 text-4xl text-white">Food &amp; Drinks</h2>
          <img
            src="https://images.unsplash.com/photo-1443131307017-4097c8ac7763?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIwfHxmb29kJTIwZHJpbmt8ZW58MHx8fHwxNjI2NTkxNjU5&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=400&amp;h=500&amp;fit=crop"
            class="mb-6 w-full"
          />
          <h3 class="font-medium mb-1 text-2xl text-color3-500 text-white">
            Shine &amp; Dine
          </h3>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur ac sagittis neque, vel egestas est.
          </p>
          <a
            href="#"
            class="border font-normal hover:bg-white hover:text-gray-800 inline-block px-6 py-2 rounded text-white"
            >Explorer Now</a
          >
        </div>
        <div class="px-4 py-6 w-full md:w-6/12 lg:pt-12 lg:w-4/12">
          <h2 class="font-bold mb-6 text-4xl text-white">Gym &amp; Park</h2>
          <img
            src="https://images.unsplash.com/photo-1586401100295-7a8096fd231a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE2MXx8Zml0bmVzc3xlbnwwfHx8fDE2MjY1OTE5NTY&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=400&amp;h=500&amp;fit=crop"
            class="mb-6 w-full"
          />
          <h3 class="font-medium mb-1 text-2xl text-color3-500 text-white">
            Score Your Goals
          </h3>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur ac sagittis neque, vel egestas est.
          </p>
          <a
            href="#"
            class="border font-normal hover:bg-white hover:text-gray-800 inline-block px-6 py-2 rounded text-white"
            >Explorer Now</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
