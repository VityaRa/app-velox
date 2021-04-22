import '../Styles/PersonalCabinet.css'
import MainWindow from './MainWindow'
import Sidebar from './Sidebar'
import Header from './Header'

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
