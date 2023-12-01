import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../Checkout/Checkout";
import useCart from "../../../Hooks/useCart";

const Payment = () => {
    const [cart] = useCart()
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
    const parsePrice = parseFloat(totalPrice).toFixed(2);
    const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center" >
            <h4 className="text-yellow-400 p-5 mt-5 text-lg font-bold  text-center">Payment</h4>
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={parsePrice}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;
