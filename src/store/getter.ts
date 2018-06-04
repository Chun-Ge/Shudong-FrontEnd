export default {
  isAuthenticated: (state) => {
    return !!state.jwtAuth;
  }
}