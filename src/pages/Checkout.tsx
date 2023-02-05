/* eslint-disable react/jsx-props-no-spreading */
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '@/components/GoBackButton';
import RadioInput from '@/components/RadioInput';
import TextInput from '@/components/TextInput';
import Summary from '@/components/Summary';
import useCart from '@/features/cartStore';

const paymentMethods = {
  eMoney: 'e-Money',
  cash: 'Cash on delivery',
};

const Schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(6),
  address: z.string().min(6),
  zipCode: z.string().min(4),
  city: z.string().min(3),
  country: z.string().min(3),
  paymentMethod: z.string().default(paymentMethods.eMoney),
  eMoneyNumber: z.string().min(6).optional(),
  eMoneyPin: z.string().min(4).optional(),
});

type TCheckoutForm = z.infer<typeof Schema>;

export default function Checkout() {
  const cart = useCart((state) => state.cart);
  const navigate = useNavigate();
  const methods = useForm<TCheckoutForm>({
    resolver: zodResolver(Schema),
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
    if (paymentMethod === paymentMethods.cash) {
      methods.resetField('eMoneyNumber');
      methods.resetField('eMoneyPin');
    }
  }, [cart.length, methods, navigate, paymentMethod]);

  return (
    <div className="c-container">
      <GoBackButton />
      <section>
        <h2 className="h2-alt mb-[3.2rem] text-black">Checkout</h2>
        <FormProvider {...methods}>
          <form id="checkout-form" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-[3.2rem] grid gap-[2.4rem]">
              <p className="text-small-alt mb-[-0.8rem]">Billing details</p>
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
            <div className="mb-[3.2rem] grid gap-[2.4rem]">
              <p className="text-small-alt mb-[-0.8rem]">Shipping info</p>
              <TextInput
                label="Your Address"
                id="address"
                placeholder="1137 Williams Avenue"
              />
              <TextInput label="ZIP Code" id="zipCode" placeholder="10001" />
              <TextInput label="City" id="city" placeholder="New York" />
              <TextInput
                label="Country"
                id="country"
                placeholder="United States"
              />
            </div>
            <div className="mb-[3.2rem] grid gap-[1.6rem]">
              <p className="text-small-alt">Payment details</p>
              <p className="input-label">Payment Method</p>
              {Object.entries(paymentMethods).map(([key, value]) => (
                <RadioInput
                  key={key}
                  label={value}
                  id="paymentMethod"
                  checked={paymentMethod === value}
                />
              ))}
            </div>
            {paymentMethod === paymentMethods.eMoney && (
              <div className="mb-[3.2rem] grid gap-[2.4rem]">
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
            )}
          </form>
        </FormProvider>
        <Summary />
        <button
          type="submit"
          form="checkout-form"
          className="btn mb-[12.9rem] w-full"
        >
          CONTINUE & PAY
        </button>
      </section>
    </div>
  );
}
