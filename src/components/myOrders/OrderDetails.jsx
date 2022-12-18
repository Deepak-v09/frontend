import React from 'react'

function OrderDetails() {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping </h1>
                <p>
                    <b>Address</b>
                    {"dafjsfgdgfhgjdgfxhgcjvjfsdgdfhm"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Abhishek"}
                </p>
                <p>
                    <b>Phone</b>
                    {"2345567787"}
                </p>
            </div>

            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"23-12-2022"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"23-12-2022"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method </b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"fsrgdhdjr"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"23-12-2022"}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹{2567}
                </p>
                <p>
                    <b>Shipping Charges Total</b>
                    ₹{60}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{256}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{256+2567+60}
                </p>
              
            </div>
            <article>
                <h1>Ordered items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{12}</span>×<span>{232}</span>
                    </div>
                </div>
{}
                <div>
                    <h4>Chicken Burger</h4>
                    <div>
                        <span>{12}</span>×<span>{322}</span>
                    </div>
                </div>
                <div>
                    <h4>Cheese Burger with French Fries</h4>
                    <div>
                        <span>{12}</span>×<span>{500}</span>
                    </div>
                </div>
                <div>
                    <h4 style={{fontWeight:800}}>Sub Total</h4>
                    <div style={{fontWeight:800}}> ₹{2567}</div>
                </div>
                
                
                
            </article>
        </main>
    </section>
  )
}

export default OrderDetails