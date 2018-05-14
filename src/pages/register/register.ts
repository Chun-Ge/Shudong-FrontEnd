import { mapActions } from "vuex";
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
        validate(username: string, password: string) {
            if(this.username === '' || this.password === '') {
                return err[0];
            }
            // 开发阶段免去邮箱格式限制
            const usernameRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if(this.username.match(usernameRegExp) === null) {
                return err[1];
            }
            if(this.username.match(/^([a-zA-Z0-9_-])+@mail\d?\.sysu\.edu\.cn/) === null) {
                return err[2];
            }
            return null;
            
        },

        async submit() {
            let res = this.validate(this.username, this.password);
            if(res) {
                this.openNotificationWithIcon('error', res.title, res.description);
                return;
            }
            try {
                let res = await register(this.username, this.password);
                await this.getUserInfo(res.data.data.userId);
                this.$router.push('/')
                this.openNotificationWithIcon('success', '注册成功', `欢迎回来`);

            } catch(error) {
                this.openNotificationWithIcon('error', '注册失败', `请重新注册`);

            }
        }
        
    }
}