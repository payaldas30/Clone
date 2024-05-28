import './App.css';
import { Banner } from './componet/Banner';
import { Export } from './componet/Export';
import { Header } from './componet/Header';
import { NewLetter } from './componet/NewLetter';
import { Plans } from './componet/Plans';



function App() {
  return (
    <div>
    <Header/>
    <Banner/>
    <Export/>
    <NewLetter/>
    <Plans/>
    </div>
  );
}

export default App;
