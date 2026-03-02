import { useState } from "react"

export const Form = () => {

    const [name , setName] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const displayData = () => {
        console.log(`Product Name : ${name}\n Product Id : ${id} \n Price : ${price} \n Total : ${total} \n`)
    }
    return (
    <div className="form">
        <h3>
            Form
        </h3>
        <input type="text" placeholder="Enter Product Name" onChange={e => {setName(e.target.value)}}/>
        <input type="number"  placeholder="Enter Product ID" onChange={e => {setId(parseInt(e.target.value))}}/>
        <input type="number"  placeholder="Enter Product Price" onChange={e => {setPrice(parseInt(e.target.value))}}/>
        <input type="number"  placeholder="Enter Total Amount" onChange={e => {setTotal(parseInt(e.target.value))}}/>
        <button onClick={() => displayData()}>Submit</button>
        
    </div>)
    
}