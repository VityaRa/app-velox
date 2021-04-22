import AppointmentItem from './AppointmentItem'
import '../Styles/Appointment.css'

function AppointmentList(props) {
  const info = props.doctors
  return (
    <ul className="appointment__list">
      {info.map((doctor) =>
        <AppointmentItem key={doctor.id.toString()}
                  doctorInfo={doctor} />
      )}
      <div className="appointment__more">
        <span className="appointment__applies">Еще {info.length - 2} записи</span> 
        <a href="#" className="appointment__about">Подробнее</a> 
      </div>
    </ul>
  );
}

export default AppointmentList