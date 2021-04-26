import ElectronicList from "./ElectronicList";

function ElectronicCard() {
  const electronicCards = [
    {
      id: 1,
      icon: `https://svgshare.com/i/WVe.svg`,
      title: "Информация о пациенте",
      info: ["Ваши личные данные", "Рекомендации врачей", "История болезней"],
    },
    {
      id: 2,
      icon: "https://svgshare.com/i/WUY.svg",
      title: "Результаты анализов",
      info: ["Вы можете узнать здесь результаты своих анализов"],
    },
    {
      id: 3,
      icon: "https://svgshare.com/i/WXX.svg",
      title: "Добавить  информацию",
      info: ["Добавляйте в свою электронную медицинскую карту новые данные"],
    },
    {
      id: 4,
      icon: "https://svgshare.com/i/WW7.svg",
      title: "История приемов",
      info: ["Вся информация о полученных услугах за все время хранится здесь"],
    },
  ];

  return (
    <section className="elec-block">
      <h3 className="title elec-block__title">Электронная карта</h3>
      <ElectronicList list={electronicCards}></ElectronicList>
    </section>
  );
}

export default ElectronicCard;
