import { HttpService } from './api.service';
import { Response } from '../model/response'
import { Post, SpecificPost, Like, Share } from '../model/post'

/**
 * 獲取最近發佈的帖子集
 * @param limitNum
 * @param offset
 */
export const retrieveRecentPosts = (limitNum: number, offset: number): Promise<Response<{ posts: Post[] }>> => {
  return HttpService.get(`/posts?limit=${limitNum}&offset=${offset}`);
}

/**
 * 創建帖子
 * @param category
 * @param title
 * @param content
 */
export const createPost = (category: string, title: string, content: string): Promise<Response<{ post: Post }>> => {
  return HttpService.post('/posts', {
    "post": {
      "categoryName": category,
      title,
      content,
    },
  });
}

/**
 * 獲取帖子
 * @param postId
 */
export const retrieveSpecificPost = (postId: string): Promise<Response<SpecificPost>> => {
  return HttpService.get(`/posts/${postId}`);
}

/**
 * 刪除帖子
 * @param postId
 */
export const deletePost = (postId: string): Promise<Response<any>> => {
  return HttpService.delete(`/posts/${postId}`);
}

/**
 * 點贊或取消點贊帖子
 * @param postId
 */
export const toggleLikePost = (postId: string): Promise<Response<Like>> => {
  return HttpService.get(`/posts/postId/like`);
}

/**
 * 舉報帖子
 * @param postId
 * @param reason
 */
export const reportPost = (postId: string, reason: string): Promise<Response<any>> => {
  return HttpService.post(`/posts/${postId}/report`, {
    reason
  });
}

/**
 * 關注帖子
 * @param postId
 */
export const toggleStarPost = (postId: string): Promise<Response<any>> => {
  return HttpService.get(`/posts/${postId}/star`);
}

/**
 * 分享帖子
 * @param postId
 */
export const sharePost = (postId: string): Promise<Response<Share>> => {
  return HttpService.get(`/posts/${postId}/share`);
}


/**
 * fetch category list
 */
export const fetchCategories = (): Promise<Response<any>> => {
  return HttpService.get(`/posts/categories`);
}
