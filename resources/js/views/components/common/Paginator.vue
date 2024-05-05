<template>
    <div>
        <div v-for="comment  in arr[page-1]" :key="comment.id">
            <comment
                v-bind:comment="comment"
            ></comment>
        </div>

        <div class="btn-toolbar">
            <div class="btn-group">
                <button class="btn btn-primary" v-for="p in pages" @click.prevent="setPage(p)">
                    {{p}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "../Comment.vue";
import _ from "lodash";

export default {
    name: "Paginator",
    components: {Comment},
    props: {
        perPage: {
            type: Number,
            required: true,
        },
        elements:{
            type: Array,
            required: true
        }
    },
    computed:{
        arr(){
            return _.chunk(this.elements, this.perPage)
        },
        pages(){
            return Math.ceil(this.elements.length / this.perPage)
        }
    },
    data() {
        return {
            page: 1
        }
    },
    methods:{
        setPage(currentPage){
            this.page = currentPage
        },
    },
}
</script>


<style scoped>

</style>
