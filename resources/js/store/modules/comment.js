import axios from "axios";

export default {
    actions: {
        fetchComments(ctx, page){
            axios.get(
                '/api/comments/'
            ).then(function (response) {
                const comments = response.data;
                ctx.commit('updateComments', comments);
            });
        },
        createComment(ctx, comment){
            axios.post(
                '/api/comments/', comment
            ).then(function (response) {
                const comment = response.data;
                ctx.commit('addComment', comment);
            });
        },
        deleteComment(ctx, id){
            axios.delete(
                '/api/comments/'+id
            ).then(function (response) {
                ctx.commit('dropComment', id);
            });
        },
        updateComment(ctx, comment){
            axios.patch(
                '/api/comments/' + comment.id, comment
            ).then(function (response) {
                const comment = response.data;
                ctx.commit('refreshComment', comment);
            });
        }
    },
    mutations:{
        updateComments(state, comments){
            state.comments = comments;
        },
        addComment(state, comment){
            state.comments.unshift(comment);
        },
        dropComment(state, id) {
            state.comments = state.comments.filter(function( obj ) {
                return obj.id !== id;
            })
        },
        refreshComment(state, comment){
            const objIndex = state.comments.findIndex(obj => obj.id === comment.id);
            state.comments[objIndex] = comment;
        },
        sortComments(state){

        }
    },
    state:{
        comments: []
    },
    getters:{
        validComment(state){

        },
        allComments(state, page){
            return state.comments;
        }
    }
}
