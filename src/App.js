import RegisterPage from "./Containers/RegisterPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "./App.scss";

library.add(fas);

function App() {
  return (
    <RegisterPage/>
  );
}

export default App;
