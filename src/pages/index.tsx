import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => (
  <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
  >
    <div>これはHomeだと</div>
  </Main>
);

export default Index;
