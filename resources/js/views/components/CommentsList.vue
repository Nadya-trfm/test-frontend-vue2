<template>
    <div>
        <comment-form></comment-form>

        <comment
            v-for="comment in allComments"
            v-bind:key="comment.id"
            v-bind:comment="comment"
        ></comment>
    </div>
</template>

<script >

import CommentForm from "./CommentForm.vue";
import {mapActions, mapGetters} from "vuex";
import Comment from "./Comment.vue";
export default {
    components: {Comment, CommentForm},
    computed: mapGetters(['allComments']),
    methods: mapActions(['fetchComments']),
    async mounted(){
         await this.fetchComments();
    },

};
</script>



<style scoped>

</style>
