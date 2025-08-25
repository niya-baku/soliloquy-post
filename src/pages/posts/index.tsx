import { Meta } from "@/layouts/Meta";
import { useGetPosts } from "@/services/fetchers/posts";
import { Main } from "@/templates/Main";
// import { createPortal } from "react-dom";

const Posts = () => {
  const { data, error } = useGetPosts();

  console.log("data", data);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {data?.posts.map((post) => (
        <div key={post.id}>
          <p>{post.name}</p>
          <p>{post.note}</p>
        </div>
      ))}
      {error && <p>エラー</p>}
    </Main>
  );
};

export default Posts;
