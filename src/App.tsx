import "./App.css";
import "@mantine/core/styles.css";
import { AuthContextProvider } from "./context/AuthContext";
import Router from "./routes/routes";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
};

export default App;
