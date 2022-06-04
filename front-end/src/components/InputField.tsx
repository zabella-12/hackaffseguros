import { FormLabel, FormControl, Input, forwardRef } from "@chakra-ui/react";

export const InputField = forwardRef(
  ({ label, required, ...props }: any, ref) => {
    console.log(props);

    return (
      <FormControl isRequired={required}>
        <FormLabel>{label}</FormLabel>
        <Input ref={ref} {...props} />
      </FormControl>
    );
  }
);
