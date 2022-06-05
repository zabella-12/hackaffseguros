import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { RequestAssurancePage } from "./pages/RequestAssurancePage";
import { FinalFormPage } from "./pages/FinalFormPage";
import { PortalClient } from "./pages/PortalClient";
import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RequestAssurancePage />} />
          <Route path="/finalForm" element={<FinalFormPage />} />
          <Route path="/portal" element={<PortalClient />} />
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
