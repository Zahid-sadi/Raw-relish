import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import './Checkout.css';



const Checkout = ({cart, price }) => {
    // console.log(cart);
    const stripe = useStripe();
    const elements = useElements();
    const [ info, setInfo ] = useState();
    const [ axiosSecure ] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [ processing, setProcessing ] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        
            axiosSecure.post("/create-payment-intent", { price })
                .then((data) => {
                console.log(data);
                setClientSecret(data.data.clientSecret);
            });
        
       
    }, [price, axiosSecure]);
    
console.log('client secret', clientSecret);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return null;
        }

        console.log("card", card);

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        });



        if (error) {
            console.log('error',error.message);
            setInfo(error.message);
        } else {
            // console.log(paymentMethod);
            setInfo("Everything is ok");
        }
         
        // intent processing off 
        // setProcessing(true);

        const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "unknown",
                    name: user?.displayName || "anonymous",
                },
            },
        });
        // setProcessing(false);
        if (confirmError) {
            console.log(confirmError);
            console.log('payment intent', paymentIntent)
        }

        // setProcessing(false)
        else {
            console.log('object');
    if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItems: cart.map(item => item.itemId),
            status: 'service pending',
            itemNames: cart.map(item => item.name)
        }
        axiosSecure.post('/payment', payment)
            .then(res => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display confirm
                }
            })
    }
}
      

        
    };
    return (
        <div className="h-screen  w-full">
            <p className="text-lg font-medium text-blue-400 text-center">{info}</p>
            <p className="text-lg font-medium text-blue-400 text-center">{transactionId}</p>
            <form onSubmit={handleSubmit}>
                <CardElement className=""
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                
                                "::placeholder": {
                                    color: "",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-success btn-wd  text-lg font-bold my-5"
                    type="submit"
                    disabled={!stripe }
                >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkout;
