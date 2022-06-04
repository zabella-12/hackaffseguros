import { Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";

export function RequestAssurancePage() {
  const { handleSubmit, register, setValue } = useForm();
  const { data, isLoading, refetch } = useQuery({
    queryKey: "cnpj",
    queryFn: () => {
      return new Promise((res) => {
        setTimeout(
          () =>
            res({
              city: "123",
              address: "address",
              state: "SP",
              companyName: "STARLINK BRAZIL SERVICOS DE INTERNET LTDA.",
              shareCapital: "800000.00",
              naturezaJuridica: "Sociedade Empresária Limitada",
            }),
          2000
        );
      });
    },
    onSuccess: (data: any) => {
      setValue("address", data.address);
      setValue("city", data.city);
      setValue("companyName", data.companyName);
      setValue("state", data.state);
      setValue("shareCapital", data.shareCapital);
      setValue("naturezaJuridica", data.naturezaJuridica);
    },
    enabled: false,
  });

  const onSubmit = (values: any) => {
    refetch();
  };

  return (
    <Layout>
      <Heading>Formulário de inscrição</Heading>
      <Text mb="4">
        Para realizamos a análise dos dados, preencha os dados inicias nos
        campos abaixo:
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <InputField
            label="Email"
            required
            {...register("email", { required: true })}
          />

          <HStack width="100%">
            <InputField
              label="Telefone"
              required
              {...register("phone", { required: true })}
            />
            <InputField label="Telefone 2" {...register("phone2")} />
          </HStack>

          <InputField
            label="CNPJ"
            required
            {...register("cnpj", { required: true })}
          />

          {data ? (
            <>
              <InputField
                label="Razão Social"
                readOnly
                {...register("companyName")}
              />
              <InputField
                label="Capital Social"
                readOnly
                {...register("shareCapital")}
              />
              <InputField
                label="Natureza Jurídica"
                readOnly
                {...register("naturezaJuridica")}
              />
              <InputField
                label="Endereço Comercial"
                readOnly
                {...register("address")}
              />
              <InputField label="Estado" readOnly {...register("state")} />
              <InputField label="Cidade" readOnly {...register("city")} />
            </>
          ) : null}

          <IconButton
            type="submit"
            colorScheme="blue"
            aria-label="Avançar"
            icon={<FaArrowRight />}
            isLoading={isLoading}
          />
        </VStack>
      </form>
    </Layout>
  );
}
