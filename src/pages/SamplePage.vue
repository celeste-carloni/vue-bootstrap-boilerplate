<template lang="pug">
    div
        b-container
            b-row
                b-col
                    h1 Sample Page
            b-row
                b-col First Column
                b-col Second Column

            b-row
                b-col
                    b-card(title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    )
</template>

<script>
//How to individually register Bootstrap component
import bCard from 'bootstrap-vue/es/components/card/card';
export default {
    name: 'SamplePage',
    components:{
        bCard
    }
}
</script>

<style></style>