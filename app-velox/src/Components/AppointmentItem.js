import '../Styles/Appointment.css'
import "../Styles/SharedStyles.css";


function AppointmentItem(props) {
  const doctorInfo = props.doctorInfo
  return (
    <li className="appointment__item">
      <span className="appointment__item__time">{`${doctorInfo.dayOfWeek} ${doctorInfo.day} | ${doctorInfo.time}`}</span>
      <span className="appointment__item__place">{doctorInfo.place}</span>
      <div className="appointment__item__doctor">
        <div className="appointment__item__doctor__about">
          <img src={doctorInfo.imageURL} alt="no" />
          <div className="appointment__item__doctor__info">
            <span className="appointment__item__doctor__info__name">{doctorInfo.name}</span>
            <span className="appointment__item__doctor__info__type">{doctorInfo.type}.</span>
          </div>
        </div>
        <button className="btn appointment__item__remove-btn">Отменить</button>
      </div>
    </li>
  );
}

export default AppointmentItem
