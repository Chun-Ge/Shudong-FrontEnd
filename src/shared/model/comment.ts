export interface Comment {
  commentId: string,
  author: string,
  relatedPostId: number,
  content: string,
  like_count: number
}

export interface Comments {
  comments: Comment[]
}
