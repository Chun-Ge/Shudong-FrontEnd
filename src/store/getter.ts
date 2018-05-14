export default {
  isAuthenticated: (state) => {
    return !!state.userInfo.userId
  }
}