<template>
    <div>
        <button-group></button-group>
        <comment-form></comment-form>
        <paginator v-bind:elements="allComments" v-bind:per-page='perPage'></paginator>
    </div>
</template>

<script >
import CommentForm from "./CommentForm.vue";
import {mapActions, mapGetters} from "vuex";
import Paginator from "./common/Paginator.vue";
import ButtonGroup from "./common/ButtonGroup.vue";
export default {
    components: {Paginator, CommentForm, ButtonGroup},
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
