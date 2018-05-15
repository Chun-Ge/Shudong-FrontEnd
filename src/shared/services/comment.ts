import { HttpService } from  './api.service';
import { Response } from '../model/response'
import { Comment, Comments } from '../model/comment';
import { Like } from '../model/post';

/**
 * 獲取帖子評論
 * @param postId 
 */
export const retrieveComments = (postId: string): Promise<Response<Comments>> => {
  return HttpService.get(`/posts/${postId}/comments`);
}

/**
 * 評論帖子
 * @param postId 
 * @param content 
 */
export const commentToPost = (postId: string, content: string): Promise<Response<Comment>> => {
  return HttpService.post(`/posts/${postId}/comments`, {
    comment: {
      content
    }
  });
}

/**
 * 刪除評論
 * @param postId 
 * @param commentId 
 */
export const deleteComment = (postId: string, commentId: string): Promise<Response<any>> => {
  return HttpService.delete(`/posts/${postId}/comments/${commentId}`);
}

/**
 * 點贊或取消點贊評論
 * @param postId 
 * @param commentId 
 */
export const toggleLikeComment = (postId: string, commentId: string): Promise<Response<Like>> => {
  return HttpService.get(`/posts/${postId}/comments/${commentId}/like`);
}

/**
 * 點贊或取消點贊評論
 * @param postId 
 * @param commentId 
 */
export const ReportComment = (postId: string, commentId: string): Promise<Response<any>> => {
  return HttpService.get(`/posts/${postId}/comments/${commentId}/report`);
}
