<template>
    <div class="container">
        <nav class="nav justify-content-end">
            <button-group></button-group>
        </nav>
        <paginator-with-elements
            :elements='allComments'
            :per-page='perPage'>
        </paginator-with-elements>
        <button v-if="isFormClose"
                @click.prevent="openCloseForm"
                type="button"
                class="btn btn-success">
            Создать
        </button>
        <comment-form
            v-else
            @openCloseForm="openCloseForm"
        ></comment-form>
    </div>
</template>

<script >
import CommentForm from "./CommentForm.vue";
import {mapActions, mapGetters} from "vuex";
import PaginatorWithElements from "./common/PaginatorWithElements.vue";
import ButtonGroup from "./common/ButtonGroup.vue";
import {ref} from "vue";
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
    setup() {
        const isFormClose = ref(true);
        function openCloseForm() {
            isFormClose.value = !isFormClose.value;
        }
        return{
            isFormClose,
            openCloseForm,
        }
    }
};
</script>



<style scoped>

</style>
