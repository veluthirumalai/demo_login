export default {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      console.log("state.token::::", !!state.token)
      return !!state.token;
    },
  };