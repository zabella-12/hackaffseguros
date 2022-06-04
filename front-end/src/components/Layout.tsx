import { Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container p="4">{children}</Container>
    </>
  );
}
