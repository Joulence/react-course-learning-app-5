import CartContext from "./cart-context";


const CartProvider = (props) => {
    const addItemToCartHandler = (items) => {

    };

    const removeItemFromCartHandler = (id) => {

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext value={cartContext}>
            {props.children}
        </CartContext>
    );
};

export default CartProvider;