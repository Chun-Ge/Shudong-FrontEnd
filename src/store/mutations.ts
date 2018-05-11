import {
    SET_USERINFO,

} from './mutation-types'

export default {
    [SET_USERINFO](state, {
        email
    }) {
        state.userInfo.email = email;
    }
}