import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
// import './Checkout.css';

const Checkout = ({ cart, price }) => {
    // console.log(cart);
    const stripe = useStripe();
    const elements = useElements();
    const [ info, setInfo ] = useState();
    const [ axiosSecure ] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [ clientSecret, setClientSecret ] = useState("");
    const [ transactionId, setTransactionId ] = useState("");

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price }).then((data) => {
            console.log(data);
            setClientSecret(data.data.clientSecret);
        });
    }, [ price, axiosSecure ]);

    // console.log("client secret", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement);

        if (card == null) {
            return null;
        }

        try {
            // Confirm the card payment with clientSecret
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous",
                    },
                },
            });

            if (error) {
                console.error("Error confirming card payment:", error);
                setInfo(error.message);
            } else {
                console.log("PaymentIntent:", paymentIntent);

                if (paymentIntent.status === "succeeded") {
                    setTransactionId(paymentIntent.id);
                    const payment = {
                        name: user?.name,
                        email: user?.email,
                        transactionId: paymentIntent.id,
                        price,
                        date: new Date(),
                        quantity: cart.length,
                        cartItems: cart.map((item) => item._id),
                        menuItems: cart.map((item) => item.itemId),
                        status: "service pending",
                        itemNames: cart.map((item) => item.name),
                    };

                    axiosSecure.post("/payment", payment).then((res) => {
                        console.log(res.data);
                        if (res.data.result.insertedId) {
                            toast.success("Payment success");
                        }
                    });
                }
                
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            setInfo("An unexpected error occurred. Please try again.");
        }
    };

    return (
        
        <div className="">
           <p className="text-lg font-medium text-blue-400 text-center">{info}</p>

            <p className="text-lg font-medium text-blue-400 mb-4 text-center">Transaction ID : {transactionId}</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-green-500">
                        Card Number*
                    </label>
                    <div className="p-4 border rounded w-full">
                        <CardNumberElement
                            id="cardNumber"
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "gray-500",
                                        },
                                    },
                                    invalid: {
                                        color: "red-500",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="expiry" className="block text-sm font-medium text-green-500">
                        Expiry Date*
                    </label>
                    <div className="p-4 border rounded w-full">
                        <CardExpiryElement
                            id="expiry"
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "gray-500",
                                        },
                                    },
                                    invalid: {
                                        color: "red-500",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="cvc" className="block text-sm font-medium text-green-500">
                        CVC*
                    </label>
                    <div className="p-4 border rounded w-full">
                        <CardCvcElement
                            id="cvc"
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "gray-500",
                                        },
                                    },
                                    invalid: {
                                        color: "red-500",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="zip" className="block text-sm font-medium text-green-500">
                        ZIP Code*
                    </label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="p-4 border rounded w-full"
                        placeholder="Enter ZIP Code"
                    />
                </div>

                <div className="flex w-full gap-4">
                <div className="mb-4">
                        <label htmlFor="zip" className="block text-sm font-medium text-green-500">
                            contact
                        </label>
                        <input
                            type="text"
                            id=""
                            name="contact number "
                            className="p-4 border rounded w-full"
                            placeholder="CONTACT NUMBER"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="zip" className="block text-sm font-medium text-green-500">
                            Country
                        </label>
                        <input
                            type="text"
                            id=""
                            name="country"
                            className="p-4 border rounded w-full"
                            placeholder="COUNTRY NAME"
                        />
                    </div>
                </div>


                <button
                    className="bg-green-500 w-full text-white font-bold py-2 px-4 mt-5 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}                >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkout;
