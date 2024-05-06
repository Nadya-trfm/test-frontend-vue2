<template>
    <div class="card w-50 my-3">
        <div class="card-body">
            <h5 class="card-title">{{comment.name}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{comment.date}}</h6>
            <p class="card-text" >{{comment.text}}</p>
            <button v-on:click.prevent="updateOpenForm"
                    type="button"
                    class="btn btn-primary">
                Изменить
            </button>
            <button v-on:click.prevent="deleteItem"
                    type="button"
                    class="btn btn-danger">
                Удалить
            </button>
        </div>
        <div v-if="openForm" class="card-footer">
         <comment-form
            v-on:updateOpenForm="updateOpenForm"
            @update:comment ="$emit('update:comment',$event)"
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
    components: {Comment, CommentForm},

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
    setup(){
        const openForm = ref(false);
        function updateOpenForm() {
           openForm.value = !openForm.value;
        }
        return{
            openForm,
            updateOpenForm,
        }
    }

};
</script>
