/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '@/components/GoBackButton';
import RadioInput from '@/components/RadioInput';
import TextInput from '@/components/TextInput';
import Summary from '@/components/Summary';
import useCart from '@/features/cartStore';
import cashOnDeliveryIcon from '@/assets/checkout/icon-cash-on-delivery.svg';

const paymentMethods = {
  eMoney: 'e-Money',
  cash: 'Cash on delivery',
};

const Schema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required').email(),
  phone: yup.string().required('Required'),
  address: yup.string().required('Required'),
  zipCode: yup.string().required('Required'),
  city: yup.string().required('Required'),
  country: yup.string().required('Required'),
  paymentMethod: yup.string().default(paymentMethods.eMoney),
  eMoneyNumber: yup.string().when('paymentMethod', {
    is: paymentMethods.eMoney,
    then: (schema) => schema.required('Required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  eMoneyPin: yup.string().when('paymentMethod', {
    is: paymentMethods.eMoney,
    then: (schema) => schema.required('Required'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

type TCheckoutForm = yup.InferType<typeof Schema>;

export default function Checkout() {
  const cart = useCart((state) => state.cart);
  const navigate = useNavigate();
  const methods = useForm<TCheckoutForm>({
    resolver: yupResolver(Schema),
    defaultValues: {
      paymentMethod: paymentMethods.eMoney,
    },
  });
  const onSubmit = (data: unknown) => console.log(data);
  const paymentMethod = methods.watch('paymentMethod');

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart.length, navigate]);

  return (
    <div className="c-container mb-[9.7rem] grid gap-[3.2rem] lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
      <GoBackButton className="mb-[-0.8rem] justify-self-start lg:col-span-2" />
      <section className="rounded bg-white px-[2.4rem] py-[2.4rem] md:px-[2.8rem] md:py-[3rem]">
        <h2 className="h2-alt mb-[3.2rem] text-black md:mb-[4rem]">Checkout</h2>
        <FormProvider {...methods}>
          <form id="checkout-form" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-[3.2rem] grid gap-[2.4rem] md:mb-[5.2rem] md:grid-cols-2">
              <p className="text-small-alt mb-[-0.8rem] md:col-span-2">
                Billing details
              </p>
              <TextInput label="Name" id="name" placeholder="Alexei Ward" />
              <TextInput
                label="Email Address"
                type="email"
                id="email"
                placeholder="alexei@mail.com"
              />
              <TextInput
                label="Phone Number"
                type="tel"
                id="phone"
                placeholder="+1 202-555-0136"
              />
            </div>
            <div className="mb-[3.2rem] grid gap-[2.4rem] md:mb-[6rem] md:grid-cols-2">
              <p className="text-small-alt mb-[-0.8rem] md:col-span-2">
                Shipping info
              </p>
              <div className="md:col-span-2">
                <TextInput
                  label="Your Address"
                  id="address"
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <TextInput label="ZIP Code" id="zipCode" placeholder="10001" />
              <TextInput label="City" id="city" placeholder="New York" />
              <TextInput
                label="Country"
                id="country"
                placeholder="United States"
              />
            </div>
            <div className="grid gap-[2.4rem] md:grid-cols-2">
              <p className="text-small-alt md:col-span-2">Payment details</p>
              <p className="input-label mb-[-0.8rem]">Payment Method</p>
              <div className="grid gap-[1.6rem]">
                {Object.entries(paymentMethods).map(([key, value]) => (
                  <RadioInput
                    key={key}
                    label={value}
                    id="paymentMethod"
                    checked={paymentMethod === value}
                  />
                ))}
              </div>
              {paymentMethod === paymentMethods.eMoney ? (
                <div className="mb-[0.8rem] mt-[0.8rem] grid w-full gap-[2.4rem] md:col-span-2 md:grid-flow-col">
                  <TextInput
                    label="e-Money Number"
                    id="eMoneyNumber"
                    placeholder="238521993"
                  />
                  <TextInput
                    label="e-Money PIN"
                    id="eMoneyPin"
                    placeholder="6891"
                  />
                </div>
              ) : (
                <div className="mt-[0.8rem] flex gap-[1.6rem] md:col-span-2 md:gap-[3.2rem]">
                  <img
                    className="mt-[0.8rem] h-[4.8rem] w-[4.8rem] flex-shrink-0"
                    src={cashOnDeliveryIcon}
                    alt="cash on deliver icon"
                  />
                  <p className="text-cart font-normal normal-case text-black/50">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </form>
        </FormProvider>
      </section>
      <section className="rounded bg-white px-[2.4rem] py-[2.4rem] md:px-[3.2rem] md:py-[3.2rem]">
        <Summary />
        <button type="submit" form="checkout-form" className="btn w-full">
          CONTINUE & PAY
        </button>
      </section>
    </div>
  );
}
