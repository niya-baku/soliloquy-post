import React from "react";
import { render, waitFor } from "@testing-library/react";
import Posts from "./index";

test("Postsコンポーネントが正しく表示されること", async () => {
  // Postsコンポーネントをレンダリングする
  const { getByText } = render(<Posts />);

  // "Posts"というテキストが表示されていることを確認する
  const postsElement = getByText("Posts");

  await waitFor(() => expect(postsElement).toBeInTheDocument());
});
