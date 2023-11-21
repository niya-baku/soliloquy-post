import React from "react";
import { render, waitFor } from "@testing-library/react";
import Posts from "./index";

test("Postsコンポーネントが正しく表示されること", async () => {
  const screen = render(<Posts />);
  const postData = [{ id: 1, name: "mswもん", note: "これは投稿" }];

  await waitFor(() => {
    for (const post of postData) {
      expect(screen.getByText(post.name)).toBeInTheDocument();
      expect(screen.getByText(post.note)).toBeInTheDocument();
    }
  });
});
