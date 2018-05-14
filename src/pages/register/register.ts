import { mapActions } from "vuex";
import { register } from "../../shared/services/user.service";

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
            if (this.username !== '' && this.password !== '') {
                const usernameRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if (this.username.match(usernameRegExp) === null) {
                    this.openNotificationWithIcon('error',
                        '输入错误',
                        '邮箱格式不正确'
                    )
                    return;
                }

                if(this.username.match(/^([a-zA-Z0-9_-])+@mail\d?\.sysu\.edu\.cn/) === null) {
                    this.openNotificationWithIcon('error',
                        '邮箱错误',
                        '目前只支持中大邮箱注册'
                    )
                    return;
                }

                register(this.username, this.password).then(res => {
                    this.getUserInfo(res.data.data.userId);
                    this.$router.push('/')
                    this.openNotificationWithIcon('success', '注册成功', `欢迎加入`);
                    
                }).catch(err => {
                    this.openNotificationWithIcon('error', '注册失败', `请重新注册`);
                })
            } else {
                this.openNotificationWithIcon('error', '错误', `用户名或者密码不能为空`);
            }
             
        }
    }
}