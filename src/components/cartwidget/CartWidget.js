import './CartWidget.css';
export const CartWidget = ({totalProducts}) =>{
    return(
        <div className="cart-widget">
            <div>
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </div>
            <div className="contador-display">
                {totalProducts}
            </div>
        </div>
    )
}