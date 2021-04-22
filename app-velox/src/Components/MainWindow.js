import React from "react";
import Appointment from "./Appointment";
import ElectronicCard from "./ElectronicCard";
import Header from "./Header";

function MainWindow() {
  const [isPressed, setPress] = React.useState(false);
  const changePress = () => setPress((press) => !press);

  const [doctorsList, actionDoctor] = React.useState([
    {
      id: 1,
      dayOfWeek: "Понедельник",
      day: "15.06.20",
      time: "15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Малушко Т. Н.",
      type: "Хирургия",
      imageURL:
        "https://cdn1.savepice.ru/uploads/2021/4/22/a375bc422f0604858a42b582f59c4983-full.png",
    },
    {
      id: 2,
      dayOfWeek: "Понедельник",
      day: "15.06.20",
      time: "15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Харьков В. С.",
      type: "Терапевтическое отделение",
      imageURL:
        "https://cdn1.savepice.ru/uploads/2021/4/22/f00a8ce34d47f4bc8736aa5b91208c00-full.png",
    },
    {
      id: 3,
      dayOfWeek: "Понедельник",
      day: "15.06.20",
      time: "15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Харьков В. С.",
      type: "Терапевтическое отделение",
      imageURL:
        "https://cdn1.savepice.ru/uploads/2021/4/22/f00a8ce34d47f4bc8736aa5b91208c00-full.png",
    },
    {
      id: 4,
      dayOfWeek: "Понедельник",
      day: "15.06.20",
      time: "15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Харьков В. С.",
      type: "Терапевтическое отделение",
      imageURL:
        "https://cdn1.savepice.ru/uploads/2021/4/22/f00a8ce34d47f4bc8736aa5b91208c00-full.png",
    },
    {
      id: 5,
      dayOfWeek: "Понедельник",
      day: "15.06.20",
      time: "15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Харьков В. С.",
      type: "Терапевтическое отделение",
      imageURL:
        "https://cdn1.savepice.ru/uploads/2021/4/22/f00a8ce34d47f4bc8736aa5b91208c00-full.png",
    },
    {
      id: 6,
      dayOfWeek: "Понедельник",
      day: "15.06.20",
      time: "15:30",
      place: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
      name: "Харьков В. С.",
      type: "Терапевтическое отделение",
      imageURL:
        "https://cdn1.savepice.ru/uploads/2021/4/22/f00a8ce34d47f4bc8736aa5b91208c00-full.png",
    },
  ]);
  const removeDoctor = (removeIndex) => actionDoctor(prevList => prevList.splice(removeIndex, 1))

  return (
    <div className="mainWindow">
      <Header></Header>
      <Appointment
        isPressed={isPressed}
        changePress={changePress}
        doctorsList={doctorsList}
        removeDoctor={removeDoctor}
      ></Appointment>
      {!isPressed ? <ElectronicCard></ElectronicCard> : null}
    </div>
  );
}

export default MainWindow;
