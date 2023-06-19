import './styles.css'
import { formattedMoney } from '../../Utils/helpers'

type PropsType = {
    img: string
    name: string
    price: number
}

function Card(props: PropsType) {

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h2 className="name">{props.name}</h2>
            <div className="line"></div>
            <h2 className="price">{formattedMoney(props.price)}</h2>
        </div>
    )
}


export default Card;