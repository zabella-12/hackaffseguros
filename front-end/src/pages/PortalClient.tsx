import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { ManPortalImg } from "../img/imgs";

export function PortalClient() {
  const [cnpj, setCnpj] = useState(false);

  const Search = () => {
    setCnpj(true);
  };

  return (
    <Layout display={"flex"}>
      <Heading>Bem vindo(a) ao Portal de Acesso</Heading>

      <Text mt="40px" fontSize={"26px"} fontWeight={"550"}>
        Serviços online
      </Text>

      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            borderBottomWidth: "2px",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
            height: "120px",
          }}
        >
          <div style={{ width: "33%", borderRightWidth: "2px" }}>
            <Text
              wordBreak={"break-word"}
              textAlign={"center"}
              padding={"10px"}
            >
              Segunda via de boletos e apólices.
            </Text>
          </div>
          <div style={{ width: "33%", borderRightWidth: "2px" }}>
            <Text
              wordBreak={"break-word"}
              textAlign={"center"}
              padding={"10px"}
            >
              Segunda via de boletos e apólices.
            </Text>
          </div>
          <div style={{ width: "33%" }}>
            <Text
              wordBreak={"break-word"}
              textAlign={"center"}
              padding={"10px"}
            >
              Segunda via de boletos e apólices.
            </Text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            flexDirection: "row",
            height: "120px",
          }}
        >
          <div style={{ width: "33%", borderRightWidth: "2px" }}>
            <Text
              wordBreak={"break-word"}
              textAlign={"center"}
              padding={"10px"}
            >
              Segunda via de boletos e apólices.
            </Text>
          </div>
          <div style={{ width: "33%", borderRightWidth: "2px" }}>
            <Text
              wordBreak={"break-word"}
              textAlign={"center"}
              padding={"10px"}
            >
              Segunda via de boletos e apólices.
            </Text>
          </div>
          <div style={{ width: "33%" }}>
            <Text
              wordBreak={"break-word"}
              textAlign={"center"}
              padding={"10px"}
            >
              Segunda via de boletos e apólices.
            </Text>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text mt="80px" fontSize={"26px"} fontWeight={"550"}>
          Requisições
        </Text>
        <Text>
          Para acompanhamento das suas solicitações já enviadas, Informe seu
          CNPJ abaixo:
        </Text>
        <Input
          width={"300px"}
          alignSelf={"center"}
          border={"2px solid #75B3F0"}
        />
        <Button
          background={"#75B3F0"}
          width={"170px"}
          mt={"30px"}
          onClick={() => Search()}
        >
          Consultar
        </Button>
      </div>

      <Box
        display={cnpj ? "flex" : "none"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        mt={"50px"}
      >
        <Box
          border={"1px solid #999"}
          width={"25%"}
          height={"120px"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"space-evenly"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text textAlign={"center"}>Data de envio da solicitação</Text>
          <Text fontWeight={"bold"}>05/06/2022</Text>
        </Box>
        <Box
          border={"1px solid #999"}
          width={"25%"}
          height={"120px"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"space-evenly"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text textAlign={"center"}>Código da solicitação</Text>
          <Text
            fontWeight={"bold"}
            wordBreak={"break-word"}
            textAlign={"center"}
          >
            202205061315xxxxx
          </Text>
        </Box>
        <Box
          border={"1px solid #999"}
          width={"25%"}
          height={"120px"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"space-evenly"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text textAlign={"center"}>Situação</Text>
          <Text fontWeight={"bold"}>Pendente</Text>
        </Box>
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Text mt="80px" fontSize={"26px"} fontWeight={"550"}>
            Requisições
          </Text>
          <Text mt="60px" fontSize={"18px"}>
            Login:
          </Text>
          <Input
            width={"200px"}
            alignSelf={"center"}
            border={"2px solid #75B3F0"}
          />
          <Text fontSize={"18px"}>Senha:</Text>
          <Input
            width={"200px"}
            alignSelf={"center"}
            border={"2px solid #75B3F0"}
          />
        </Box>
        <ManPortalImg />
      </div>
    </Layout>
  );
}
