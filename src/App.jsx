import { MantineProvider } from '@mantine/core';
import Path from "./route"
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Path/>
    </MantineProvider>
  );
}