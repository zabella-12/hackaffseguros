import { Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container pt="4" pb="8">{children}</Container>
    </>
  );
}
