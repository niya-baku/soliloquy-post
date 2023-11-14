export type FetchError = {
  status: number;
  messages: {
    key: string;
    message: string;
  }[];
};
