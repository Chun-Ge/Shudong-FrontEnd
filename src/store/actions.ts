import { SET_USERINFO } from './mutation-types';
import { retrieveUserInfo } from '../shared/services/user.service';

export default {
    async getUserInfo({
		commit,
		state
	}, userId: string) {
		let res = await retrieveUserInfo(userId);
		commit(SET_USERINFO, res.data.data);
	},
}