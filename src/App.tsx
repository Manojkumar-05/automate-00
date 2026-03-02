import './App.css';
import {Orders} from "./pages/Orders"
import {Form} from "./pages/Form"
function App() {
  console.log(Orders);
  return (
    <div className="App">
      <Orders />
      <Form />
    </div>
  );
}

export default App;
