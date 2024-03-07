<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { defineProps } from 'vue';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
  products: Object,
});

const addToCart = () => {
  console.log(props.products);
  if (!props.products || props.products.id === undefined) {
    console.error('Product is undefined or lacks an ID.');
    return;
  }

  Inertia.post('/cart/add', {
    product_id: props.products.id, // Asegúrate de que este campo coincida con cómo tu backend espera recibir el ID del producto
    quantity: 1, // Este es un valor estático, puedes ajustarlo según necesites, por ejemplo, basado en una entrada del usuario
    price: props.products.price, // Asumo que el precio se maneja de esta forma, ajusta según tu modelo
  }, {
    preserveScroll: true,
    preserveState: true
  });


};

</script>


<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Product Details
      </h2>
    </template>

    <div class="flex justify-center items-center min-h-screen">
      <div class="flex space-x-10 items-start bg-white p-8 rounded-lg shadow-lg">
        <div class="flex-none" style="width: 300px; height: 300px;">
          <img class="object-cover h-full w-full rounded-lg" :src="products.image" :alt="products.name" />
        </div>

        <div class="flex-grow space-y-4">
          <h1 class="text-2xl font-bold">{{ products.name }}</h1>
          <p class="text-lg">{{ products.description }}</p>
          <p class="text-xl font-semibold">${{ products.price }}</p>
          <button @click="addToCart"
            class="px-6 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 transition duration-150 ease-in-out">
            Add to cart
          </button>

        </div>
      </div>
    </div>
  </AppLayout>
</template>