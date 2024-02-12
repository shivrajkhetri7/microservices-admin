import React from 'react';
import { Sample } from './component/sampleFile/sample';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
