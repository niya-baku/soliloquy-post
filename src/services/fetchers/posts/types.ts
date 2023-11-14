export type Post = {
  id: number;
  name: string;
  note: string;
};

export type ResponseBody = {
  posts: Post[];
};
