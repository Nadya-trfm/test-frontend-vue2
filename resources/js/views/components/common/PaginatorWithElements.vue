<template>
    <div class="column my-auto">
        <comment-item
            v-for="comment in elementsInPage"
            :key="comment.id"
            :comment="comment"
        ></comment-item>
        <nav class="d-flex justify-content-center">
            <ul class="pagination">
                <li v-for="p in pages" class="page-item">
                    <button class="page-link" @click.prevent="setPage(p)">
                        {{p}}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import CommentItem from "../CommentItem.vue";
import _ from "lodash";

export default {
    name: "PaginatorWithElements",
    components: {CommentItem},
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
        allElementsForPages(){
            return _.chunk(this.elements, this.perPage)
        },
        elementsInPage(){
            return this.allElementsForPages[this.page-1];
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
