import { ThirdwebProvider } from "thirdweb/react";
import { Router } from "./router";

export function App() {
  return (
    <ThirdwebProvider>
      <Router />
    </ThirdwebProvider>
  );
}
