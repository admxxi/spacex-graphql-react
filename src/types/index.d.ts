export interface IPost {
  id: number
  title: string
  body: string
}

export type Country = {
  code: !number
  name: !string
  emoji: !string
}

export type Mission = {
  description: string
  id: ID
  manufacturers: [string]
  name: string
  twitter: string
  website: string
  wikipedia: string
}
