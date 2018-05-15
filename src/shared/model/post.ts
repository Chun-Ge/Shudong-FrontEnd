export interface Post {
    postId: number,
    author: string,
    title: string,
    summary: string,
    likeCount: number,
    commentCount: number
}

export interface SpecificPost extends Post {
    content: string
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