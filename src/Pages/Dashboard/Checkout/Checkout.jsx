import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Checkout = ({ price }) => {
    // console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [ info, setInfo ] = useState();
    const [ axiosSecure ] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [ processing, setProcessing ] = useState(false);
    const [ clientSecret, setClientSecret ] = useState("");

    useEffect(() => {
        if (price > 0 ) {
            axiosSecure.post("/create-payment-intent", { price })
                .then((data) => {
                // console.log(data);
                setClientSecret(data.clientSecret);
            });
        }
       
    }, [price, axiosSecure]);
    

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

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });



        if (error) {
            // console.log(error.message);
            setInfo(error.message);
        } else {
            console.log(paymentMethod);
            setInfo("Everything is ok");
        }
        setProcessing(true);

        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
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
        }

        
    };
    return (
        <div className="bg-white m-12 p-12">
            <p className="text-lg font-medium text-blue-400 mb-5">{info}</p>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-success btn-wd w-full text-lg font-bold my-5"
                    type="submit"
                    disabled={!stripe || clientSecret || processing}
                >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkout;
