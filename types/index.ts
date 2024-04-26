export interface Message {
  id: string
  content: string
  createdAt: string
}

export interface MessageWithUser extends Message {
  user: {
    id: string
    username: string
  }
}

export interface MessagePayload extends Omit<Message, "createdAt"> {
  created_at: string
  user_id: string
}
