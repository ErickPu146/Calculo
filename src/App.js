import { ContentProvider } from "./context";
import { Menu } from "./pages/menu";

function App() {
  return (
    <>
      <ContentProvider>
        <Menu />
      </ContentProvider>
    </>
  );
}

export default App;
