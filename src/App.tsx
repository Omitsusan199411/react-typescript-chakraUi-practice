import { theme } from "./theme/theme";
import { VFC } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

export const App: VFC = () => {
  return (
    // rootとなるファイルの最上位の階層にChakraProvidrタグを記述すること
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>aaaaaaaaaaa</p>
    </ChakraProvider>
  );
};
