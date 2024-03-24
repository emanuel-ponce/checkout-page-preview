import Image from "next/image";

function HeaderBrand() {

  return (
    <a href="https://stripe.com/payments/checkout" target="_blank">
        <Image src="/stripe-logo.png" width={48} height={20} alt="Stripe logo"/>
    </a>
  );
}

export default HeaderBrand;
