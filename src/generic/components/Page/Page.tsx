import { Children } from "@/generic/models/Children";

import { Header } from "@/generic/components/Header/Header";
import { Main } from "@/generic/components/Main/Main";
import { Footer } from "@/generic/components/Footer/Footer";

export const Page = ({ children }: { children: Children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
