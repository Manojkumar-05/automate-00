import Card from "../components/Card"
import {orders, ordersType} from '../data/dummy'; 

export const Orders = () => {
    return (
    <div className="orders">
        {orders.map((order : ordersType , index: number) => {
            return(
                <Card order={order}/>
            )
        })}
    </div>)
    
}