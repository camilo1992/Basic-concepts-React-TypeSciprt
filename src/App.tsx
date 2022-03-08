import Todos from "./components/Todos";
import FormList from "./components/FormList";
import ListContextProvider from "./store/List-context";

function App() {
  return (
    <ListContextProvider>
      <FormList />
      <Todos />
    </ListContextProvider>
  );
}

export default App;
