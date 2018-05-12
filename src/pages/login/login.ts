import { mapActions } from "vuex";
import { login } from "../../shared/services/user.service";

export default {
    data: () => {
        return {
            username: '',
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
            this.$store.dispatch('getUserInfo', this.username)
            console.log('state: ', this.$store.state.userInfo);
            if (this.username !== '' && this.password !== '') {
                // const usernameRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                // if (this.username.match(usernameRegExp) === null) {
                //     this.openNotificationWithIcon('error',
                //         '输入错误',
                //         '邮箱格式不正确'
                //     )
                // }

                login(this.username, this.password).then(res => {
                    this.openNotificationWithIcon('success', '登陆成功', `欢迎回来${res.data.data.username}`);
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