<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="-translate-x-full">
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div
                                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <nav class="flex flex-1 flex-col">
                                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <a :href="item.href"
                                                        :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                                        <component :is="item.icon" class="h-6 w-6 shrink-0"
                                                            aria-hidden="true" />
                                                        {{ item.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                            <ul role="list" class="-mx-2 mt-2 space-y-1">
                                                <li v-for="team in teams" :key="team.name">
                                                    <a :href="team.href"
                                                        :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                                        <span
                                                            class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{
            team.initial }}</span>
                                                        <span class="truncate">{{ team.name }}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mt-auto">
                                            <a href="#"
                                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-screen bg-gray-100">

        <!-- Contenedor exterior con margen y bordes redondeados -->
            <div class="m-4 rounded-lg overflow-hidden bg-gray-100">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 p-6 ring-1 ring-white/10 rounded-2xl h-screen">
                <!-- Componente Sidebar -->
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li v-for="item in navigation" :key="item.name" class="relative">
                            <!-- Aseguramos que el enlace es clicable solo si no tiene submenús -->
                            <div v-if="item.children && item.children.length"
                                 :class="['group flex items-center justify-between gap-x-3 rounded-md p-2 text-sm font-semibold',
                            item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800']"
                                 @click="toggleSubMenu(item)">
                                <div class="flex items-center gap-x-2">
                                    <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                                    <span>{{ item.name }}</span>
                                </div>
                                <button class="text-gray-400 hover:text-white">
                                    <ChevronDownIcon class="h-5 w-5 transform transition-transform duration-300"
                                                     :class="{ 'rotate-180': item.isOpen }" aria-hidden="true" />
                                </button>
                            </div>
                            <a v-else :href="item.href"
                               :class="['flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                            item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800']">
                                <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                                {{ item.name }}
                            </a>
                            <!-- Submenú -->
                            <ul v-show="item.isOpen && item.children" class="mt-1 pl-4 space-y-1">
                                <li v-for="subItem in item.children" :key="subItem.name">
                                    <a :href="subItem.href"
                                       :class="[subItem.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'block rounded-md p-2 text-sm leading-6']">
                                        {{ subItem.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>

        <div class="lg:pl-72 lg:mr-4 bg-gray-100">
            <div class="z-40 flex m-4 h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 ring-1 ring-white/10 rounded-2xl">

            <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Separator -->
                <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form class="relative flex flex-1" action="#" method="GET">
                        <label for="search-field" class="sr-only">Search</label>
                        <MagnifyingGlassIcon
                            class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            aria-hidden="true" />
                        <input id="search-field"
                            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            placeholder="Search..." type="search" name="search" />
                    </form>
                    <div class="flex items-center gap-x-4 lg:gap-x-6">

                        <!-- Separator -->
                        <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-1.5">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.auth.user.profile_photo_url" :alt="$page.props.auth.user.name">

                                <span class="hidden lg:flex lg:items-center">
                                    <span class="ml-4 text-sm font-semibold leading-6 text-gray-400"
                                        aria-hidden="true">{{ $page.props.auth.user.name }}</span>
                                    <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>

                           </MenuButton>
                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Account
                                        </div>
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <a :href="item.href"
                                        :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-700 hover:bg-gray-100']">{{
                                        item.name }}</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <main class="py-10">
                <div class="">

                    <slot />

                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    BellIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    TagIcon,
    RectangleStackIcon,
    CurrencyEuroIcon

} from '@heroicons/vue/24/outline'


import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = reactive([
    {
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: HomeIcon,
        current: true,
        isOpen: false,
        children: []
    },
    {
        name: 'Products',
        href: '/admin/products',
        icon: RectangleStackIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Products', href: '/admin/products', current: false },
            { name: 'Add Product', href: '/admin/products/create', current: false },
            { name: 'Favorite Products', href: '/admin/products/favorite', current: false },
        ]
    },

    {
        name: 'Categories',
        href: '/admin/categories',
        icon: FolderIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Categories', href: '/admin/categories', current: false },
            { name: 'Add Category', href: '/admin/categories/create', current: false },
            { name: 'Featured Categories', href: '/admin/categories/featured', current: false },
        ]
    },
    {
        name: 'Tags',
        href: '/admin/tags',
        icon: TagIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Tags', href: '/admin/tags', current: false },
            { name: 'Add Tag', href: '/admin/tags/create', current: false },
        ]
    },
    {
        name: 'Users',
        href: '/admin/users',
        icon: UsersIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Users', href: '/admin/users', current: false },
            { name: 'Add User', href: '/admin/users/create', current: false },
        ]
    },

    {
        name: 'Orders',
        href: '/admin/orders',
        icon: ChartPieIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Orders', href: '/admin/orders', current: false },
        ]
    },

    {
        name: 'Payments',
        href: '/admin/payments',
        icon: CurrencyEuroIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Payments', href: '/admin/payments', current: false },
        ]
    },

    {
        name: 'Shipping Options',
        href: '/admin/shipping',
        icon: DocumentDuplicateIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'All Shipping Options', href: '/admin/shipping-options', current: false },
            { name: 'Add Shipping Option', href: '/admin/shipping-options/create', current: false },

        ]
    },

    {
        name: 'Site Settings',
        href: '/admin/settings',
        icon: Cog6ToothIcon,
        current: false,
        isOpen: false,
        children: [
            { name: 'Site Settings', href: '/admin/site-settings', current: false },
        ]
    },

]);

function toggleSubMenu(item) {
    item.isOpen = !item.isOpen;
}

onMounted(() => {
    navigation.forEach(item => {
        item.isOpen = item.children.some(subItem => route.path === subItem.href);
        item.current = route.path === item.href || item.children.some(subItem => route.path === subItem.href);
    });
});

// const teams = [
//     { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
//     { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
//     { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
// ]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)
</script>
