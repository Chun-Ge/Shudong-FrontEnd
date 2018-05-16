export interface Post {
    postId: number,
    author: string,
    title: string,
    summary: string,
    likeCount: number,
    commentCount: number
    content?: string
}

export interface SpecificPost {
    post: Post
}

export interface Like {
    currentUserLike: boolean,
    currentLikeCount: number
}

export interface Share {
    currentUserShared: boolean,
    currentPostSharedCount: number,
    shareSummary: string
}