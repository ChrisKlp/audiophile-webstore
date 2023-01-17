/* eslint-disable no-empty-pattern */
import GoBackButton from '@/components/GoBackButton';
import InputWrapper from '@/components/InputWrapper';

type Props = {};

export default function Checkout({}: Props) {
  return (
    <div className="c-container">
      <GoBackButton />
      <section>
        <h2 className="h2-alt text-black">Checkout</h2>
        <p className="text-small-alt">Billing details</p>
        <div>
          <InputWrapper label="Name">
            <input
              type="text"
              id="sd"
              placeholder="Alex Ward"
              className="input"
            />
          </InputWrapper>
        </div>
      </section>
    </div>
  );
}
