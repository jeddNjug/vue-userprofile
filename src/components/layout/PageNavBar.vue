<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://vuejs.org/" class="flex items-center">
                <img src="https://v2.vuejs.org/images/logo.svg" class="h-8 mr-3" alt="Portal Website" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portal</span>
            </a>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <select id="countries" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected>Selected Theme...</option>
                            <option value="theme-blue">Blue Theme</option>
                            <option value="theme-pink">Pink Theme</option>
                            <option value="theme-green">Green Theme</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>