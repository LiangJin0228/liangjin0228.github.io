<template>
  <v-sheet :id="baseId" class="cursor-default" min-height="100vh">
    <v-card
      class="d-flex align-center rounded-0"
      :color="baseColorData"
      flat
      min-height="100vh"
      min-width="100vw"
      width="100vw"
    >
      <v-container :style="{ 'max-width': baseMaxWidth + 'px' }">
        <slot />
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script setup>
  import { reactive, ref, watch } from 'vue'
  import { useTheme } from 'vuetify'

  defineProps({
    baseId: String,
    baseMaxWidth: {
      type: [String, Number],
      default: '1280',
    },
  })

  const theme = useTheme()
  const themeStatus = reactive({ ...theme })
  const baseColorData = themeStatus.global.current.dark ? ref('black') : ref('white')

  watch(themeStatus, newValue => {
    if (newValue.global.current.dark) {
      baseColorData.value = 'black'
    } else {
      baseColorData.value = 'white'
    }
  })
</script>
