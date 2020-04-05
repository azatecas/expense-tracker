import React from 'react';

const TotalExpenses = () => {
    return(
        <div className="totals">
            <div>
              <h3>TotalExpenses: </h3>  
            </div>
            <div className="expenses">
                <div className="available">
                    <p>$200</p>   
                </div>  
            </div>            
        </div>
    )
}

export default TotalExpenses;