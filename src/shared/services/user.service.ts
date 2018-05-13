import { HttpService } from  './api.service';
import { Response } from '../model/response'
import { UserInfo } from '../model/user'

/**
 * 用户登录
 * @param email 
 * @param password 
 */
 export const login = (email: string, password: string): Promise<Response<UserInfo>> => {
     return HttpService.post('/login',{
         email: email,
         password: password 
     })
 }

/**
 * 用户登出
 * @param userId 
 */
export const logout = (userId: string): Promise<Response<any>> => {
    return HttpService.post('/logout', {
        userId: userId
    })
}

/**
 * 用户注册
 * @param email 
 * @param password 
 */
export const register = (username: string, password: string): Promise<Response<UserInfo>> => {
    return HttpService.post(`/users/${username}`, {
        username: username,
        password: password
    })
}

/**
 * 获取用户信息
 * @param username 
 */
export const getUserInfo = (username: string): Promise<Response<UserInfo>> => {
    return HttpService.get('/users/' + username);
}

/**
 * 修改用户信息
 * @param oldUsername
 * @param info 
 */
export const modifyUserInfo = (oldUsername: string, info: UserInfo): Promise<Response<UserInfo>> => {
    return HttpService.patch(`/users/${oldUsername}`, info);
}

/**
 * 注销用户
 * @param username 
 * @param password 
 */
export const deleteUser = (username: string, password: string): Promise<Response<any>> => {
    return HttpService.delete(`/users/${username}`, {
        data: {
            username: username,
            password: password
        },
    })
}