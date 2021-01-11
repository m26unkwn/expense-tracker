import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
export const IncomeExpenses=()=>{
    
    const {transactions}=useContext(GlobalContext);

    const amounts =transactions.map(transaction=>transaction.amount);
    console.log(amounts)
    
    const income= amounts.filter(item => item > 0)
    .reduce((acc, item)=>(acc += item), 0).toFixed(2);

    console.log(income)

    const Expenses = (amounts.filter(item => item < 0)
    .reduce((acc, item)=>(acc += item), 0) * -1).toFixed(2);

    console.log(Expenses)

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">₹{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p  className="money minus">₹{Expenses}</p>
            </div>
        </div>

    )
}