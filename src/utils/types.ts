export interface IUser {
  firstName: string;
  lastName: string;
  photo: string;
  friends?: string[];
  location?: string;
  occupation?: string;
  viewedProfile?: number;
  impressions?: number;
  status?: "online" | "offline" | "busy" | "reading" | string;
}

export interface IPost {
  title: string;
  content: string;
  author: string;
  images: string[];
  reacts: Map<string, string>;
  comments?: IComment[];
  privacy: string;
  group: string;
  userReact?: "like" | "love" | "laugh" | "support";
}

export interface IComment {
  post: string;
  author: string;
  images: string[];
  reacts: Map<string, string>;
  content?: string;
  userReact?: "like" | "love" | "laugh" | "support";
}
