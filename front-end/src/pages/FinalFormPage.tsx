import { Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ManImg } from "../img/imgs";

export function FinalFormPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Heading>Dados enviados com sucesso!</Heading>
      <Text mb="4">
        A FairFax agradeçe seu contato, e em breve lhe retornamos com uma
        proposta.
      </Text>

      <Text mt={"50px"}>
        Você poderá acompanhar o andamento de sua solicitação em nosso Portal de
        Acesso FF.
      </Text>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button
            mt={55}
            background={"#012AFF"}
            color={"#fff"}
            width={250}
            height={55}
            fontSize={24}
            onClick={() => navigate("/portal")}
          >
            Portal de Acesso
          </Button>
          <Text mt={5} textAlign={"center"} textDecoration={"underline"}>
            Retornar ao inicio.
          </Text>
        </div>
        <ManImg />
      </div>
    </Layout>
  );
}
