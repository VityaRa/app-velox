import Appointment from "./Appointment";
import ElectronicCard from "./ElectronicCard";
import Header from "./Header"

function MainWindow() {
  return (
    <div className="mainWindow">
      <Header></Header>
      <Appointment></Appointment>
      <ElectronicCard></ElectronicCard>
    </div>
  );
}

export default MainWindow;
