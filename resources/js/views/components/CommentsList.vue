<template>
    <div>
        <comment-form></comment-form>
        <paginator v-bind:elements="allComments" v-bind:per-page='perPage'></paginator>
    </div>
</template>

<script >
import CommentForm from "./CommentForm.vue";
import {mapActions, mapGetters} from "vuex";
import Paginator from "./common/Paginator.vue";

export default {
    components: {Paginator, CommentForm},
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
