import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  forwardRef,
  Input,
  Tooltip,
} from "@chakra-ui/react";

export const InputField = forwardRef(
  ({ label, required, tooltip, ...props }: any, ref) => {
    return (
      <FormControl isRequired={required}>
        <Flex align="center">
          <FormLabel>{label} </FormLabel>
          {tooltip ? (
            <Box mb="2">
              <Tooltip label={tooltip} fontSize="md">
                <QuestionIcon />
              </Tooltip>
            </Box>
          ) : null}
        </Flex>
        <Input ref={ref} {...props} />
      </FormControl>
    );
  }
);
