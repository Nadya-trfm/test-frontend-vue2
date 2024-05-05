import axios from "axios";

export default {
    actions: {
       fetchComments(ctx){
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
        }
    },
    mutations:{
        updateComments(state, comments){
            state.comments = comments;
        },
       addComment(state, comment){
            state.comments.unshift(comment);
        }
    },
    state:{
        comments: []
    },
    getters:{
        validComment(state){

        },
        allComments(state){
            return state.comments;
        }
    }
}
