import '../Styles/ElectronicCard.css'

function ElectronicItem(props) {
  const elecItem = props.cardInfo;
  return (
    <li className="elec__item">
      <div className="elec__logo__container">
        <img src={elecItem.icon} className="elec__logo" />
      </div>
      <div className="elec__info__container">
        <h3 className="elec__info__title">{elecItem.title}</h3>
        <hr />
        {elecItem.info.length === 1 ? (
          <span className="elec__info__single__text">{elecItem.info[0]}</span>
        ) : (
          <ul className="elec__info__list">
            {elecItem.info.map((item, index) => (
              <li className="elec__info__list__item" key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default ElectronicItem;
