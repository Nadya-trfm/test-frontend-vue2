<template>
    <div class="container">
        <div class="nav justify-content-end">
            <button-group></button-group>
        </div>
        <paginator-with-elements
            :elements='allComments'
            :per-page='perPage'>
        </paginator-with-elements>
        <comment-form></comment-form>
    </div>
</template>

<script >
import CommentForm from "./CommentForm.vue";
import {mapActions, mapGetters} from "vuex";
import PaginatorWithElements from "./common/PaginatorWithElements.vue";
import ButtonGroup from "./common/ButtonGroup.vue";
export default {
    components: {PaginatorWithElements, CommentForm, ButtonGroup},
    computed: mapGetters(['allComments']),
    data() {
        return {
            perPage: 3,
        }
    },
    methods:{
        ...mapActions(['fetchComments']),
    },
    async mounted(){
         await this.fetchComments();
    },

};
</script>



<style scoped>

</style>
