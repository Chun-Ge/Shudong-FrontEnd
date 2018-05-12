export default {
  props: ['curPageContent', 'hasMsg'],
  data: () => {
    return {
      canPullLeft: true,

    }
  },
  methods: {
    onPressIcon(value) {
      console.log(value)
    }
  }
}