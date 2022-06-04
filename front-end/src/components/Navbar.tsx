import { Box, Container, Image } from "@chakra-ui/react";
import logo from "../logo.png";

export function Navbar() {
  return (
    <Box bg="#75B3F0" p="4">
      <Container>
        <Image src={logo} width="64px" />
      </Container>
    </Box>
  );
}
