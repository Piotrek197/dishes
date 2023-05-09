import { useState }  from 'react';
import Form from "../Form/Form";
import Preview from "../Preview/Preview";

import { DishType } from "../../types";
import './App.scss';

function App() {

  //API response
  const [result, setResult] = useState<DishType | null>(null);

  return (
    <div className="app-container">
      <Form setResult={setResult}/>
      <Preview result={result}/>
    </div>
  )
}

export default App
