import AppointmentList from "./AppointmentList";
import "../Styles/Appointment.css";
import "../Styles/SharedStyles.css";

function Appointment() {
  const doctorsList = [
    {
      id: 1,
      date: "Понедельник 15.06.20 | 15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Малушко Т. Н.",
      type: "Хирургия",
      imageURL: "https://cdn1.savepice.ru/uploads/2021/4/22/a375bc422f0604858a42b582f59c4983-full.png",
    },
    {
      id: 2,
      date: "Понедельник 15.06.20 | 18:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Харьков В. С.",
      type: "Терапевтическое отделение",
      imageURL: "https://cdn1.savepice.ru/uploads/2021/4/22/f00a8ce34d47f4bc8736aa5b91208c00-full.png",
    },
  ];

  return (
    <section className="appointment">
      <h3 className="title appointment__title">Записи на прием</h3>
      <AppointmentList doctors={doctorsList}></AppointmentList>
    </section>
  );
}

export default Appointment;
