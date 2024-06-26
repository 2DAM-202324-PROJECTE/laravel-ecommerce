<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link, router } from '@inertiajs/vue3';
import { ChevronRightIcon, HomeIcon, PlusIcon, PhotoIcon } from "@heroicons/vue/20/solid/index.js";
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const props = defineProps({
    tags: Array,
    categories: Array
});

const form = ref({
    name: "",
    description: "",
    price: "",
    stock: "",
    images: [],
    imagePreviews: [],
    tags: [],
    categories: []
});

const selectedTag = ref('');
const selectedCategory = ref('');

const availableTags = computed(() => {
    return props.tags.filter(tag => !form.value.tags.some(t => t.id === tag.id));
});

function handleFiles(event) {
    const newFiles = event.target.files;
    if (newFiles) {
        for (let i = 0; i < newFiles.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                form.value.imagePreviews.push(e.target.result);
                form.value.images.push(newFiles[i]);
            };
            reader.readAsDataURL(newFiles[i]);
        }
    }
}

function addTag() {
    if (selectedTag.value) {
        const tagToAdd = props.tags.find(tag => tag.id === selectedTag.value);
        if (tagToAdd && !form.value.tags.some(t => t.id === tagToAdd.id)) {
            form.value.tags.push(tagToAdd);
        }
        selectedTag.value = ''; // Reset the dropdown after adding a tag
    }
}

function removeTag(tagId) {
    const index = form.value.tags.findIndex(t => t.id === tagId);
    if (index > -1) {
        form.value.tags.splice(index, 1);
    }
}

function removeImage(index) {
    form.value.imagePreviews.splice(index, 1);
    form.value.images.splice(index, 1);
}

function store() {
    let formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("description", form.value.description);
    formData.append("price", form.value.price);
    formData.append("stock", form.value.stock);


    form.value.tags.forEach(tag => {
        formData.append('tags[]', tag.id);
    });

    form.value.images.forEach(image => {
        formData.append("images[]", image);
    });

    form.value.categories.forEach(category => {
        formData.append('categories[]', category.id);
    });

    router.post("/admin/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(() => {
        alert('Product created successfully.');
        router.replace('/admin/products');
    }).catch(error => {
        console.error('Error creating product:', error);
        alert('Error creating the product');
    });
}

function addCategory() {
    if (selectedCategory.value) {
        const categoryToAdd = props.categories.find(category => category.id === selectedCategory.value);
        if (categoryToAdd && !form.value.categories.some(c => c.id === categoryToAdd.id)) {
            form.value.categories.push(categoryToAdd);
        }
        selectedCategory.value = '';
    }
}

function removeCategory(categoryId) {
    const index = form.value.categories.findIndex(c => c.id === categoryId);
    if (index > -1) {
        form.value.categories.splice(index, 1);
    }
}
</script>

<template>
    <AdminLayout title="Create Product">
        <div class="mx-4 mt-4 mb-14">
            <nav class="flex" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center space-x-4">
                    <li>
                        <div>
                            <Link href="/admin/dashboard" class="text-gray-400 hover:text-gray-500">
                            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span class="sr-only">Home</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <Link href="/admin/dashboard"
                                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Admin</Link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <Link href="/admin/products"
                                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Products</Link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <Link href="/admin/products/create"
                                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Create</Link>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="mt-4 mx-4">
            <div class="bg-white p-6 rounded-2xl border-b shadow-2xl">
                <div class="flex justify-center px-4 py-8">
                    <div class="w-full max-w-4xl mx-auto bg-white p-8">
                        <div class="mb-8">
                            <h1 class="text-2xl font-bold text-gray-700 mb-1 text-center">
                                Add a New Product
                            </h1>
                            <p class="text-gray-600 text-sm text-center">
                                Complete the form below to list a new product in
                                your store.
                            </p>
                        </div>

                        <form @submit.prevent="store" class="space-y-6">
                            <div>
                                <label for="name" class="block text-base font-bold text-gray-900">Product Name</label>
                                <input v-model="form.name" type="text" id="name" name="name"
                                    class="my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Product..." />
                            </div>
                            <div>
                                <label for="description"
                                    class="block text-base font-bold text-gray-900">Description</label>
                                <textarea v-model="form.description" id="description" name="description" rows="4"
                                    class="my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Provide a detailed description of the product"></textarea>
                            </div>
                            <div class="md:flex md:gap-6 md:items-end">
                                <div class="md:w-1/2">
                                    <label for="price" class="block text-base font-bold text-gray-900">Price</label>
                                    <input v-model="form.price" type="text" id="price" name="price"
                                        class="my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="0.00" />
                                </div>
                                <div class="md:w-1/2">
                                    <label for="stock" class="block text-base font-bold text-gray-900">Stock</label>
                                    <input v-model="form.stock" type="number" id="stock" name="stock"
                                        class="my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Quantity" />
                                </div>
                            </div>

                            <div>
                                <label for="categories"
                                    class="block text-base font-bold text-gray-900">Categories</label>
                                <div class="my-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
                                    <div class="flex items-center">
                                        <select v-model="selectedCategory"
                                            class="flex-grow bg-gray-100 border-none rounded-l-lg py-2 px-4 focus:ring-1 focus:ring-blue-500 focus:outline-none">
                                            <option disabled value="">Select a category</option>
                                            <option v-for="category in categories" :key="category.id"
                                                :value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                        <button type="button" @click="addCategory"
                                            class="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            Add
                                        </button>
                                    </div>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <div v-for="(category, index) in form.categories" :key="category.id"
                                            class="flex items-center bg-green-600 text-white rounded py-2 px-3 text-sm font-semibold cursor-pointer hover:bg-green-700">
                                            {{ category.name }}
                                            <button @click="removeCategory(category.id)"
                                                class="ml-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label for="tags" class="block text-base font-medium text-gray-900">Tags</label>
                                <div class="my-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
                                    <div class="flex items-center">
                                        <select v-model="selectedTag"
                                            class="flex-grow bg-gray-100 border-none rounded-l-lg py-2 px-4 focus:ring-1 focus:ring-blue-500 focus:outline-none">
                                            <option disabled value="">Select a tag</option>
                                            <option v-for="tag in availableTags" :key="tag.id" :value="tag.id">{{
                            tag.name }}</option>
                                        </select>
                                        <button type="button" @click="addTag"
                                            class="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            Add
                                        </button>
                                    </div>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <div v-for="(tag, index) in form.tags" :key="tag.id"
                                            class="flex items-center bg-blue-600 text-white rounded-full py-2 px-3 text-sm font-semibold cursor-pointer hover:bg-blue-700">
                                            {{ tag.name }}
                                            <button @click="removeTag(tag.id)"
                                                class="ml-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="cover-photo"
                                    class="block text-base font-bold leading-6 text-gray-900">Photo</label>
                                <div
                                    class="my-4 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                        <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="images"
                                                class="relative cursor-pointer rounded-md bg-white font-bold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
                                                <span>Upload a file</span>
                                                <input id="images" name="images[]" type="file" class="sr-only" multiple
                                                    @change="handleFiles" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                            clickable: true,
                            el: '.swiper-pagination',
                        }" :navigation="{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }" :modules="[Pagination, Navigation]" class="mySwiper">
                                <!-- Slides -->
                                <SwiperSlide v-for="(image, index) in form.imagePreviews" :key="index">
                                    <img :src="image" alt="Preview" class="object-cover rounded-lg shadow-md h-96" />
                                    <!-- Button to remove the image -->
                                    <button @click="removeImage(index)"
                                        class="absolute top-0 right-0 m-2 bg-red-500 text-white p-1 rounded-full">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </SwiperSlide>

                                <!-- Add Pagination -->
                                <div class="swiper-pagination"></div>

                                <!-- Add Navigation -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </Swiper>

                            <div class="flex justify-end mt-4">
                                <button type="submit"
                                    class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    <PlusIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                    Create product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
