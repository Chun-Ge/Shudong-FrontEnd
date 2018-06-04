import { Post } from './post'
import { Comment } from './comment'
export interface UserInfo {
    user: {
        userId: number
    },
    likePosts?: Post[],
    likeComments?: Comment[],
    starPosts?: Post[],
    starComments?: Comment[]
}