import { ordersType } from "../data/dummy";

const Card = ({order}:{order:ordersType}) => {
    return (
        <div className="card" key={order.id} >
            <div>Order Idd : {order.id}</div>
            <div>User Id : {order.userId}</div>
            <div >
                <h4>Products</h4> 
                {order.products.map((product) => {
                    return(
                        <div className="product" key={product.productId}>
                            <div>Product Id: {product.productId}</div>
                            <div>Product Name: {product.name}</div>
                            <div>Product Price: {product.price}</div>
                        </div>
                    )
                    
                })}
            </div>
            <div>Total: {order.total}</div>
            <div>Status: {order.status}</div>
            <div>Order Date: {order.orderDate}</div>
            <div>Tags : 
                <div className="flex-it">
                {order.tags.map((tag, idx) => {
                    return(
                        <div key={idx} >
                            {tag}
                        </div>
                    )
                    
                })}
                </div>
            </div>
            <h4>Shipping</h4>
            <div>Method: {order.shipping.method}</div>
            <div>Tracking Number: {order.shipping.trackingNumber}</div>
            <div>Address: <div>{order.shipping.address.street}, {order.shipping.address.city}, {order.shipping.address.zip}</div></div>
            <div>Dimensions: 
                <div className="flex-it">
                    <div>Weigth : {order.shipping.dimensions.weight}</div>
                    <div>Length : {order.shipping.dimensions.length}</div>
                    <div>Width : {order.shipping.dimensions.width}</div>
                    <div>Height : {order.shipping.dimensions.height}</div>
                </div>
            </div>

        </div>
    )
}

export default Card;