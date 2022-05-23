import React from 'react'
import restaurant1 from "../assets/restaurant1.jpeg"
import restaurant2 from "../assets/restaurant2.jpeg"
import restaurant3 from "../assets/restaurant3.jpeg"
import restaurant4 from "../assets/restaurant4.jpeg"
import restaurant5 from "../assets/restaurant5.jpeg"
import restaurant6 from "../assets/restaurant6.jpeg"
import restaurant7 from "../assets/restaurant7.jpeg"

const Restaurants = () => {
  return (
    <div className="container divider">
    <div className="cards">
        <div className="card">
            <img width="254" height="160px" src={restaurant1} alt=""/>
            <div className="restaurant-details">
                <div className="restaurant-title">Chaitanya Parathas</div>
                <div className="restaurant-subtitle">North India, Punjabi, Chinese, Thalis Combo, Beverages </div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.3
                </div>
                 .<div className="restaurant-delivery-timings"> 33 MINS</div> .
                <div className="restaurant-cost-for-two">₹200 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">20% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={restaurant2} alt="" />
            <div className="restaurant-details">
                <div className="restaurant-title">MH 12 Pav Bhaji</div>
                <div className="restaurant-subtitle">Snacks, Pizza, Beverages, Steet Food</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.0
                </div>
                 .<div className="restaurant-delivery-timings"> 25 MINS</div> .
                <div className="restaurant-cost-for-two">₹250 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">10% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={restaurant3} alt="" />
            <div className="restaurant-details">
                <div className="restaurant-title">Lunch Box</div>
                <div className="restaurant-subtitle">North India, Punjabi, Combo, Biryani, Healthy Food, Jain, Thalis </div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.2
                </div>
                 .<div className="restaurant-delivery-timings"> 31 MINS</div> .
                <div className="restaurant-cost-for-two">₹200 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">20% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={restaurant4} alt=""/>
            <div className="restaurant-details">
                <div className="restaurant-title">The Hungry Hippe</div>
                <div className="restaurant-subtitle">Chinese, Italian, Thai</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 2.0
                </div>
                .
                <div className="restaurant-delivery-timings"> 38 MINS</div>
                .
                <div className="restaurant-cost-for-two">₹500 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">40% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={restaurant5} alt=""/>
            <div className="restaurant-details">
                <div className="restaurant-title">Ovenstory Pizzas</div>
                <div className="restaurant-subtitle">Pizzas</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.1
                </div>
                 .<div className="restaurant-delivery-timings"> 45 MINS</div> .
                <div className="restaurant-cost-for-two">₹600 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">50% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={restaurant6} alt=""/>
            <div className="restaurant-details">
                <div className="restaurant-title">Starbucks Coffee</div>
                <div className="restaurant-subtitle">Beverages, Ice Cream</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.3
                </div>
                 .<div className="restaurant-delivery-timings"> 38 MINS</div> .
                <div className="restaurant-cost-for-two">₹400 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">40% off | Use TRYNEW</span>
            </div>
        </div>
        <div className="card">
            <img width="254" height="160px" src={restaurant7} alt=""/>
            <div className="restaurant-details">
                <div className="restaurant-title">Starbucks Coffee</div>
                <div className="restaurant-subtitle">Beverages, Ice Cream</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> 4.3
                </div>
                 .<div className="restaurant-delivery-timings"> 38 MINS</div> .
                <div className="restaurant-cost-for-two">₹400 FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">40% off | Use TRYNEW</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Restaurants