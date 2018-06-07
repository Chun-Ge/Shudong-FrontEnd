import { HttpService } from  './api.service';
import { Response } from '../model/response'
import { UserInfo } from '../model/user'

/**
 * 用户登录
 * @param email
 * @param password
 */
 export const login = (email: string, password: string): Promise<Response<{userId: number}>> => {
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
export const register = (email: string, password: string): Promise<Response<{userId: number}>> => {
    return HttpService.post('/users', {
        email: email,
        password: password
    })
}

/**
 * 获取用户信息
 * @param userId
 */
export const retrieveUserInfo = (userId: string): Promise<Response<UserInfo>> => {
    return HttpService.get(`/users/${userId}`);
}

/**
 * 修改用户信息
 * @param userId
 * @param userInfo
 */
export const modifyUserInfo = (userId: string, userInfo: UserInfo): Promise<Response<UserInfo>> => {
    return HttpService.patch(`/users/${userId}`, userInfo);
}

/**
 * 注销用户
 * @param userId
 * @param email
 * @param password
 */
export const deleteUser = (userId: string, email: string,password: string): Promise<Response<any>> => {
    return HttpService.delete(`/users/${userId}`, {
        data: {
            email: email,
            password: password
        },
    })
}

/**
 * get Auth Code
 * @param email
 */
export const getAuthCode = (email: string): Promise<Response<any>> => {
  return HttpService.post(`/authcode`, {
      data: {
          email: email,
      },
  })
}

/**
 * reset password
 * @param email
 * @param authCode
 * @param password
 */
export const resetPassword = (email: string, authCode: string, password: string): Promise<Response<any>> => {
  return HttpService.patch(`/reset_password`, {
      data: {
          email: email,
          authCode: authCode,
          newPassword: password,
      },
  })
}
