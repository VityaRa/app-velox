import AppointmentItem from "./AppointmentItem";
import "../Styles/Appointment.css";

function AppointmentList(props) {
  const info = props.doctors;
  return (
    <ul className="appointment__list" style={props.isPressed ? {display: "block", overflowY : "scroll", maxWidth: "500px"} : {display: "flex"}}>
      {
        !props.isPressed ? 
        (info.filter((doctor, index) => index <= 1) 
              .map((doctor, index) => (<AppointmentItem removeDoctor={props.removeDoctor} key={doctor.id} id={index} doctorInfo={doctor} />))) :
        (info.map((doctor, index) => (<AppointmentItem removeDoctor={props.removeDoctor} key={doctor.id} id={index}  doctorInfo={doctor} />)))
      }

      { !props.isPressed ? (
        <div className="appointment__more">
        <span className="appointment__applies">
          Еще {info.length - 2 >= 0 ? info.length - 2 : 0} записи
        </span>
        <a href="#" className="appointment__about" onClick={props.changePress}>
          Подробнее
        </a>
      </div>) : (null)
      
    }
    </ul>
  );
}

export default AppointmentList;
