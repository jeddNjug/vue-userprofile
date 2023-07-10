<script setup>
import { computed } from 'vue';
const props = defineProps({
    index: { type: Number, default: 0 },
    title: { type: String, required: true },
    color: { type: String, required: true },
    percentage: { type: Number, required: true },
}),
    width = computed(() => {
        const w = Math.min(parseInt(props.percentage), 100); // if the width exceeds 100 cap it to 100
        return 'width:' + w + '%;';
    }); 
</script>
<template>
    <h3 class="font-normal text-left " :class="{ 'mt-4': index > 0 }">{{ title }} </h3>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-1">
        <div class=" text-xs font-medium  text-center p-0.5 leading-none rounded-full" :class="color" :style="width">
            {{ percentage }}%</div>
    </div>
</template>