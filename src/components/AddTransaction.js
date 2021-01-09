import React, {useState} from "react";

export const AddTransaction=()=>{
    const [text, setText]= useState('');

    const [amount, setAmount]= useState(0);


    return(


        <>
        <h3>Add Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="Text">Text</label>
                    <input type="text" value={text}  onChange={(e)=> setText(e.target.value)}placeholder="Enter Text..." />

                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                       > Amount<br/>
                        (negative - expense, postive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        
        </>

    )
}