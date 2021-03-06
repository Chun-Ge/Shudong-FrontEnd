import { mapMutations, mapActions } from "vuex";
import { register } from "../../shared/services/user.service";

const err = [
    {
        title: '输入错误',
        description: '用户名或者密码不能为空'
    },
    {
        title: '邮箱格式错误',
        description: '邮箱格式不正确'
    },
    {
        title: '邮箱类型错误',
        description: '目前只支持中大邮箱'
    }
];

export default {
    data: () => {
        return {
            email: '',
            password: '',
            loading: false,
        }
    },
    methods: {
        ...mapMutations([
            'SET_JWTAUTH'
        ]),
        ...mapActions([
            'getUserInfo'
        ]),

        openNotificationWithIcon(type: string, title: string, descrip: string) {
            this.$notification[type]({
              message: title,
              description: descrip
            })
            
        },
        validate(email: string, password: string) {
            if(this.email === '' || this.password === '') {
                return err[0];
            }
            // 开发阶段免去邮箱格式限制
            const emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if(this.email.match(emailRegExp) === null) {
                this.loading = false;
                return err[1];
            }
            if(this.email.match(/^([a-zA-Z0-9_-])+@mail\d?\.sysu\.edu\.cn/) === null) {
                this.loading = false;
                return err[2];
            }
            return null;
            
        },

        async submit() {
            this.loading = true;
            let res = this.validate(this.email, this.password);
            if(res) {
                this.openNotificationWithIcon('error', res.title, res.description);
                return;
            }
            try {
                let res = await register(this.email, this.password);
                this.SET_JWTAUTH(res.headers.authorization);
                await this.getUserInfo(res.data.data.userId);
                this.$router.push('/')
                this.openNotificationWithIcon('success', '注册成功', `欢迎回来`);

            } catch(error) {
                this.openNotificationWithIcon('error', '注册失败', `请重新注册`);

            } finally {
                this.loading = false;
            }
        }
        
    }
}