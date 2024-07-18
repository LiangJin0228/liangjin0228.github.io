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

<script>
export default {
    props: {
        baseId: {
            type: String
        },
        baseColor: {
            type: String,
            default: 'black'
        },
        baseMaxWidth: {
            type: String || Number,
            default: '1280'
        }
    },
    watch: {
        '$vuetify.theme.current.dark': function (val) {
            this.baseColorData = val ? 'black' : 'white'
        }
    },
    data() {
        return {
            baseColorData: 'black'
        }
    },
}
</script>