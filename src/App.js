import './App.css';
import { lazy, Suspense } from 'react';
import './carregamento.css';

//import Slogan from './code-splitting/Slogan';
//import Rodape from './code-splitting/Rodape';
const Slogan = lazy(() => import('./code-splitting/Slogan'));
const Rodape = lazy(() => import('./code-splitting/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">

     

        <Suspense fallback=
        {<p><div class="c-loader"></div></p>}>
        <Slogan />
        </Suspense>

        <Suspense fallback=
        {<p>Carregando...Aguarde</p>}>
        <Rodape />
        </Suspense>

      </header>
    </div>
  );
}

export default App;



{/* <Suspense fallback={<img src='https://pa1.narvii.com/6898/0942d25fd0bc260c51d360ed1a328df5e57e1b5cr1-320-231_00.gif' />}> */}

