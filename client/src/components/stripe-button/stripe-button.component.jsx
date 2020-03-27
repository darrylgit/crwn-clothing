import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey = 'pk_test_yM70W2RZ7Otzi6yLDSuEi74D00lZvwS3SV';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeCheckoutButton;
