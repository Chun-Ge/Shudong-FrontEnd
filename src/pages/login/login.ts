import { mapActions } from "vuex";
import { login } from "../../shared/services/user.service";

export default {
    data: () => {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions([
            'getUserInfo'
        ]),

        openNotificationWithIcon(type: string, title: string, descrip: string) {
            this.$notification[type]({
              message: title,
              description: descrip
            })
            
        },

        submit() {
            // console.log(this.password)
            this.$store.dispatch('getUserInfo', this.email)
            console.log('state: ', this.$store.state.userInfo);
            if (this.email !== '' && this.password !== '') {
                const emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if (this.email.match(emailRegExp) === null) {
                    this.openNotificationWithIcon('error',
                        '输入错误',
                        '邮箱格式不正确'
                    )
                }

                login(this.email, this.password).then(res => {
                    this.openNotificationWithIcon('success', '登陆成功', `欢迎回来`);
                    // this.$store.dispatch('getUserInfo', this.username)
                    // console.log('state: ', this.$store.state.userInfo);
                }).catch(err => {
                    this.openNotificationWithIcon('error', '登陆失败', `请重新登陆`);
                })
            } else {
                this.openNotificationWithIcon('error', '错误', `用户名或者密码不能为空`);
            }
             
        }
    }
}