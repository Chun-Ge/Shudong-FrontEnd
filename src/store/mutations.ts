import {
    SET_USERINFO,
    SET_TOPBARTEXT,
    TOGGLE_MENU,

} from './mutation-types'
import { UserInfo } from '../shared/model/user';

export default {
    [SET_USERINFO](state, userInfo: UserInfo) {
        state.userInfo = {
            ...state.userInfo,
            ...userInfo
        };
    },
    [SET_TOPBARTEXT](state, content: string) {
        state.topbarText = content;
    },
    [TOGGLE_MENU](state) {
        state.hiddenMenu = !state.hiddenMenu;
    }
}