import { Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";

export function RequestAssurancePage() {
  const [step, setStep] = useState<number>(0);
  const [result, setResult] = useState({});

  const updateResult = (values: any) => setResult({ ...result, ...values });

  const nextStep = () => setStep((step) => step + 1);

  const prevStep = () => setStep((step) => step - 1);

  const renderSubtitle = () => {
    let subtitle;
    if (step === 0) {
      subtitle =
        "Para realizamos a análise dos dados, preencha os dados inicias nos campos abaixo:";
    }

    if (step === 1) {
      subtitle =
        "Os anexos não são obrigatórios, mas facilitará na aprovação da sua apólice.";
    }

    if (step === 2) {
      subtitle =
        "Para realizamos a análise dos dados, preencha os dados de patrimônio nos campos abaixo:";
    }

    if (step === 3) {
      subtitle = "Resumo dos dados inseridos:";
    }

    return <Text mb="4">{subtitle}</Text>;
  };

  const renderForm = () => {
    if (step === 0) {
      return (
        <FirstStepForm
          initialValues={result}
          onSuccess={(values: any) => {
            updateResult(values);
            nextStep();
          }}
        />
      );
    }

    if (step === 1) {
      return (
        <SecondStepForm
          onPrev={prevStep}
          onSuccess={(values: any) => {
            updateResult(values);
            nextStep();
          }}
        />
      );
    }

    if (step === 2) {
      return (
        <ThirdStepForm
          onPrev={prevStep}
          onSuccess={(values: any) => {
            updateResult(values);
            nextStep();
          }}
        />
      );
    }

    if (step === 3) {
      return (
        <FourthStepForm
          initialValues={result}
          onPrev={prevStep}
          onSuccess={() => {}}
        />
      );
    }

    return null;
  };

  return (
    <Layout>
      <Heading>Formulário de inscrição</Heading>
      {renderSubtitle()}
      {renderForm()}
    </Layout>
  );
}

function FirstStepForm({ initialValues, onSuccess }: any) {
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: initialValues,
  });
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
    if (!data) {
      refetch();
    } else {
      onSuccess(values);
    }
  };

  return (
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
  );
}

function SecondStepForm({ onPrev, onSuccess }: any) {
  const { handleSubmit } = useForm();

  const onSubmit = (values: any) => {
    onSuccess(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <InputField label="Balanço patrimonial" type="file" />
        <InputField label="Demonstração do resultado" type="file" />
        <InputField label="Fluxo de caixa" type="file" />
        <HStack>
          <IconButton
            type="button"
            colorScheme="blue"
            aria-label="Voltar"
            icon={<FaArrowLeft />}
            onClick={onPrev}
          />
          <IconButton
            type="submit"
            colorScheme="blue"
            aria-label="Avançar"
            icon={<FaArrowRight />}
          />
        </HStack>
      </VStack>
    </form>
  );
}

function ThirdStepForm({ onPrev, onSuccess }: any) {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values: any) => {
    onSuccess(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <InputField label="Quantidade do item" {...register("count")} />
        <InputField label="Descrição do item" {...register("description")} />
        <InputField label="Valor unitário R$" {...register("amount")} />
        <HStack>
          <IconButton
            type="button"
            colorScheme="blue"
            aria-label="Voltar"
            icon={<FaArrowLeft />}
            onClick={onPrev}
          />
          <IconButton
            type="submit"
            colorScheme="blue"
            aria-label="Avançar"
            icon={<FaArrowRight />}
          />
        </HStack>
      </VStack>
    </form>
  );
}

function FourthStepForm({ onPrev, onSuccess, initialValues }: any) {
  const { handleSubmit, register } = useForm({ defaultValues: initialValues });

  const onSubmit = (values: any) => {
    onSuccess(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <InputField label="Email" readOnly {...register("email")} />

        <HStack width="100%">
          <InputField label="Telefone" readOnly {...register("phone")} />
          <InputField label="Telefone 2" readOnly {...register("phone2")} />
        </HStack>

        <InputField label="CNPJ" readOnly {...register("cnpj")} />

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

        <InputField
          label="Quantidade do item"
          readOnly
          {...register("count")}
        />
        <InputField
          label="Descrição do item"
          readOnly
          {...register("description")}
        />
        <InputField
          label="Valor unitário R$"
          readOnly
          {...register("amount")}
        />

        <HStack>
          <IconButton
            type="button"
            colorScheme="blue"
            aria-label="Voltar"
            icon={<FaArrowLeft />}
            onClick={onPrev}
          />
          <IconButton
            type="submit"
            colorScheme="blue"
            aria-label="Avançar"
            icon={<FaArrowRight />}
          />
        </HStack>
      </VStack>
    </form>
  );
}
