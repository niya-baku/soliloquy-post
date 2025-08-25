import { Meta } from "@/layouts/Meta";

import { Main } from "@/templates/Main";
import { useRouter } from "next/router";

const Jump = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <button type="button" onClick={() => router.push("/posts")}>
        ページ遷移
      </button>
    </Main>
  );
};

export default Jump;
