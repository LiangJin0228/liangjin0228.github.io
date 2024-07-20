<template>
    <v-sheet :id="baseId" min-height="100vh" class="cursor-default">
        <v-card flat :color="baseColorData" width="100vw" min-width="100vw" min-height="100vh"
            class="d-flex align-center rounded-0">
            <v-container :style="{ 'max-width': baseMaxWidth + 'px' }">
                <slot></slot>
            </v-container>
        </v-card>
    </v-sheet>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useTheme } from 'vuetify'

const props = defineProps({
    baseId: String,
    baseMaxWidth: {
        type: [String, Number],
        default: '1280'
    }
})

const theme = useTheme()
const themeStatus = reactive({ ...theme })
const baseColorData = themeStatus.global.current.dark ? ref('black') : ref('white')

watch(themeStatus, (newValue) => {
    if (newValue.global.current.dark) {
        baseColorData.value = 'black'
    } else {
        baseColorData.value = 'white'
    }
})
</script>