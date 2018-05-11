import { mapMutations } from "vuex";

export default {
    data: () => {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapMutations([
            'SET_USERINFO'
        ]),

        openNotificationWithIcon(type: string, title: string, descrip: string) {
            this.$notification[type]({
              message: title,
              description: descrip
            })
            
        },

        submit() {
            if (this.email !== '' && this.password !== '') {
                this.$http.post(this.domain + '/login').then (
                    (res) => {
                        if(res.ok) {
                            this.
                            this.$route.push()
                        }
                    }
                )
            }
             
        }
    }
}