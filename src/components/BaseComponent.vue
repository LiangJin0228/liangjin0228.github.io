<template>
    <v-sheet :id="baseId" min-height="100vh">
        <v-card :color="baseColor" width="100vw" min-width="100vw" min-height="100vh" class="d-flex align-center">
            <v-container>
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
        }
    }
}
</script>