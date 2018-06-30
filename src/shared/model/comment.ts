export interface Comment {
  commentId: string,
  author: string,
  relatedPostId: number,
  content: string,
  likeCount: number
}

export interface Comments {
  comments: Comment[]
}
