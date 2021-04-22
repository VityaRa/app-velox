import ElectronicItem from './ElectronicItem'
import '../Styles/ElectronicCard.css'

function ElectronicList(props) {
  const elList = props.list
  return (
    <ul className="elec-block__list">
      {elList.map((card) =>
        <ElectronicItem key={card.id.toString()}
                  cardInfo={card} />
      )}
    </ul>
  );
}


export default ElectronicList
