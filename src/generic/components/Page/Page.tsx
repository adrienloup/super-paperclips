import { Children } from "@/generic/models/Children";

import { Header } from "@/generic/components/header/Header";
import { Main } from "@/generic/components/main/Main";
import { Footer } from "@/generic/components/footer/Footer";

export const Page = ({ children }: { children: Children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
