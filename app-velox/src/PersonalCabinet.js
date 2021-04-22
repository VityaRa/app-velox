import './PersonalCabinet.css';
import MainWindow from './Components/MainWindow'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'

function PersonalCabinet() {
  return (
    <div className="personalCabinet">
      <Sidebar></Sidebar>
      <MainWindow>
      </MainWindow>

    </div>
  );
}

export default PersonalCabinet;
