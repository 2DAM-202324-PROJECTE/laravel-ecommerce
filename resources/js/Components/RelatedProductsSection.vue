<template>
    <section aria-labelledby="related-heading" class="bg-white py-24 sm:py-32 lg:py-40">
        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="related-heading" class="text-lg font-medium text-gray-900">Customers also purchased</h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="relatedProduct.imageSrc" :alt="relatedProduct.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <a :href="relatedProduct.href">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ relatedProduct.name }}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ relatedProduct.color }}</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">{{ relatedProduct.price }} €</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    relatedProducts: {
        type: Array,
        required: true
    }
});
</script>
