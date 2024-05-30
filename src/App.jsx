import { BrowserRouter } from "react-router-dom";
import Layout from "./routes";

function App() {

  return (
    <div className='w-[100%]'>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
