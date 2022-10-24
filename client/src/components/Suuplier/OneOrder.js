import React, { useState } from 'react'

export const OneOrder = () => {

    const [order, setOrder] = useState({});

    const getOrder = () => {
        
    }

  return (
    <div>
        <table>
            <tr>
                <td>Order ID</td>
                <td></td>
            </tr>
            <tr>
                <td>Quantiy</td>
                <td></td>
            </tr>
            <tr>
                <td>Price</td>
                <td></td>
            </tr>
        </table>
    </div>
  )
}
