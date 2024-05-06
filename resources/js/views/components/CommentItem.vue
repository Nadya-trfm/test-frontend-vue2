<template>
    <div class="card w-50 my-3">
        <div class="card-body">
            <h5 class="card-title">{{comment.name}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{comment.date}}</h6>
            <p class="card-text" >{{comment.text}}</p>
            <button @click.prevent="openCloseForm"
                    type="button"
                    class="btn btn-primary">
                Изменить
            </button>
            <button @click.prevent="deleteItem"
                    type="button"
                    class="btn btn-danger">
                Удалить
            </button>
        </div>
        <div v-if="isFormOpen" class="card-footer">
            <comment-form
                @openCloseForm="openCloseForm"
                :comment="comment"
            ></comment-form>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex";
import CommentForm from "./CommentForm.vue";
import {ref} from "vue";

export default {
    name: 'CommentItem',
    components: {CommentForm},
    props: {
        comment: {
            type: Object,
            required:true,
        },
    },
    methods: {
        ...mapActions(['deleteComment']),
        deleteItem(){
            this.deleteComment(this.comment.id)
        },

    },
    setup() {
        const isFormOpen = ref(false);
        function openCloseForm() {
            isFormOpen.value = !isFormOpen.value;
        }
        return{
            isFormOpen,
            openCloseForm,
        }
    }
};
</script>
