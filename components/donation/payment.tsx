'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { nairaAmounts } from '@/constants';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';

import { nairaFormSchema } from '@/lib/schemas/form_schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { BsBank } from 'react-icons/bs';
import Image from 'next/image';
import numeral from 'numeral';

// card images
import MasterCard from '/public/icons/master_card_logo.png';
import VisaCard from '/public/icons/visa_logo.png';
import VerveCard from '/public/icons/verve_logo.png';
import { useRouter } from 'next/navigation';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/db/firebase';

const Payment = () => {
  // payment states
  const [currency, setCurrency] = useState('ngn');
  const [amount, setAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [acceptRecurring, setAcceptRecurring] = useState(false);
  const [fundsTransferred, setFundsTransferred] = useState(false);
  const [paymentInterval, setPaymentInterval] = useState('monthly');
  const [onlinePayment, setOnlinePayment] = useState(true);
  const [error, setError] = useState('');

  //   currency amounts
  const currencyAmounts = nairaAmounts;

  // form schema
  const formSchema = nairaFormSchema;

  //   define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      amount: 5000,
      paymentInterval: 'monthly',
      comment: '',
    },
  });

  // handle the paymentInterval value change
  const handleValueChange = (value: string) => {
    setPaymentInterval(value);
    form.setValue('paymentInterval', value);
  };

  //   online payment button activation
  const buttonActive = () => {
    if (onlinePayment && !recurring) {
      return false;
    } else if (onlinePayment && recurring && acceptRecurring) {
      return false;
    }
    return true;
  };

  // State to store Paystack instance
  const [paystackPopup, setPaystackPopup] = useState<any>(undefined);

  // Initialize PaystackPop on client-side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import the module
      const PaystackPop = require('@paystack/inline-js').default;
      const Paystack = new PaystackPop();
      setPaystackPopup(Paystack);
    }
  }, []);

  // initialize router
  const router = useRouter();

  // define submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    //  get form values
    const { email, amount, comment, first_name, last_name, paymentInterval } =
      values;

    // set current time
    const currentTime = Date.now();

    if (!paystackPopup) return; // Ensure PaystackPop is initialized

    try {
      if (onlinePayment) {
        // Unique transaction reference
        const ref = `fr-stanley-fdn-donate-${currentTime}-${
          Math.floor(Math.random() * 1000000000000) + 1
        }`;

        // success action
        const onSuccess = async () => {
          router.push(`https://frstanleyfdn.org/donation_success?ref=${ref}`);

          await setDoc(doc(db, 'transactions', ref), {
            amount: amount,
            email: email,
            comment: comment,
            reference: ref,
            fullName: first_name + ' ' + last_name,
            payment_interval: recurring && paymentInterval,
            online_payment: onlinePayment,
            funds_transferred: fundsTransferred && fundsTransferred,
            recurring: recurring,
            accept_recurring: acceptRecurring,
            createdAt: new Date(),
          });
        };

        if (recurring) {
          paystackPopup.newTransaction({
            key: process.env.PAYSTACK_PUBLIC_KEY,
            email: email,
            amount: amount * 100,
            firstName: first_name,
            lastName: last_name,
            reference: ref,
            planInterval: `${paymentInterval}`,
            onSuccess,
          });
        } else {
          paystackPopup.newTransaction({
            key: process.env.PAYSTACK_PUBLIC_KEY,
            email: email,
            amount: amount * 100,
            firstName: first_name,
            lastName: last_name,
            reference: ref,
            onSuccess,
          });
        }
      } else {
        // offline payment (bank transfer)
        // Unique transaction reference
        const ref = `fr-stanley-fdn-donate-offline-${currentTime}-${
          Math.floor(Math.random() * 1000000000000) + 1
        }`;

        await setDoc(doc(db, 'transactions', ref), {
          amount: amount,
          email: email,
          comment: comment,
          reference: ref,
          fullName: first_name + ' ' + last_name,
          payment_interval: recurring && paymentInterval,
          online_payment: onlinePayment,
          funds_transferred: fundsTransferred && fundsTransferred,
          recurring: recurring,
          accept_recurring: acceptRecurring,
          createdAt: new Date(),
        });

        router.push(`https://frstanleyfdn.org/donation_success?ref=${ref}`);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  }

  return (
    <div className="p-5 lg:p-10 font-mono">
      <h1 className="text-gray-100 uppercase  font-semibold text-lg mb-10">
        Support our work
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Donation amount in naira. */}
          <FormField
            name="amount"
            control={form.control}
            render={({ field }) => {
              // handle input amount change
              const handleAmountChange = (
                event: ChangeEvent<HTMLInputElement>,
              ) => {
                // value
                const value = event.target.value;

                // convert the input value to a number if it's a valid numeric value, otherwise set it to an empty string
                const numericValue = value === '' ? 0 : Number(value);

                // Only update state if the value is a valid number or an empty string (for clearing the input)
                if (!isNaN(Number(numericValue))) {
                  setAmount(Number(numericValue));
                  field.onChange(numericValue); // Update the form control with the numeric value
                }
              };

              return (
                <FormItem>
                  <h3 className="uppercase text-gray-100">Amount to Donate</h3>
                  <div className="flex items-center w-[180px] text-xl border border-gray-100">
                    <Label className="py-3 px-4 text-[#bd873c] bg-gray-100 font-bold">
                      ₦
                    </Label>
                    <FormControl>
                      <Input
                        placeholder="0.00"
                        {...field}
                        value={amount === null ? 0 : amount}
                        onChange={handleAmountChange}
                        className="rounded-none bg-transparent font-gray-100 font-light text-xl text-gray-100 border-none"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* amount options */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center flex-wrap gap-3">
              {currencyAmounts.map((donationAmount) => (
                <Button
                  key={donationAmount}
                  size="lg"
                  className={`rounded-none text-xl bg-[#bd873c] bg-opacity-40 text-opacity-40 text-gray-100 ${
                    donationAmount == amount &&
                    'bg-opacity-100 text-opacity-100'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    form.setValue('amount', donationAmount);
                    setAmount(donationAmount);
                    setCustomAmount(false);
                  }}
                >
                  {currency == 'ngn' ? '₦' : '$'}
                  {numeral(donationAmount).format('0, 0')}
                </Button>
              ))}
            </div>
            <Button
              size="lg"
              className={`rounded-none bg-[#bd873c] bg-opacity-40 text-gray-100 text-opacity-40 text-xl uppercase w-[200px] ${
                customAmount && 'bg-opacity-100 text-opacity-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setCustomAmount(true);
                setAmount(0);
                form.setValue('amount', 0);
              }}
            >
              Custom Amount
            </Button>
          </div>

          {/* recurring payments */}
          {onlinePayment && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2 text-gray-100">
                <Checkbox
                  id="payment_frequency"
                  checked={recurring}
                  className="border border-gray-100 rounded-none"
                  onClick={(e) => {
                    e.preventDefault();
                    setRecurring(!recurring);
                  }}
                />
                <label
                  htmlFor="payment_frequency"
                  className="text-lg lg:text-xl font-semibold uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Make this donation every
                </label>
              </div>

              <FormField
                control={form.control}
                name="paymentInterval"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={handleValueChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full md:w-[180px] lg:w-[400px] rounded-none text-lg lg:text-xl bg-transparent text-gray-100">
                          <SelectValue placeholder="MONTH" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="rounded-none">
                        <SelectItem
                          value="monthly"
                          className="text-base uppercase"
                        >
                          MONTH
                        </SelectItem>
                        <SelectItem
                          value="quarterly"
                          className="text-base uppercase"
                        >
                          QUARTER
                        </SelectItem>
                        <SelectItem
                          value="annually"
                          className="text-base uppercase"
                        >
                          YEAR
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Personal Information */}
          <div>
            <h3 className="text-lg lg:text-xl text-gray-100 uppercase">
              Personal Info
            </h3>
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl items-center">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="hidden">First Name</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="First Name"
                        {...field}
                        className="rounded-none bg-transparent border border-gray-500 lg:placeholder:text-xl text-lg lg:text-xl text-gray-100 ring-offset-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="hidden">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className="rounded-none bg-transparent border border-gray-500 lg:placeholder:text-xl text-lg lg:text-xl text-gray-100 ring-offset-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4 w-full max-w-3xl">
                  <FormLabel className="hidden">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email."
                      {...field}
                      className="rounded-none bg-transparent border border-gray-500 lg:placeholder:text-xl text-lg lg:text-xl text-gray-100 ring-offset-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Comment area */}
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="w-full max-w-3xl">
                  <FormLabel className="hidden">Comments</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Leave a comment"
                      {...field}
                      className="rounded-none lg:placeholder:text-lg text-base lg:text-lg ring-offset-gray-500"
                      rows={8}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Mode of payment selector */}
          <div className="mt-8 flex flex-col gap-3 max-w-2xl">
            <div
              className={`flex items-center space-x-2 border border-gray-500 px-3 py-2 text-lg uppercase lg:text-xl bg-[#bd873c] ${
                !onlinePayment && 'bg-opacity-50'
              }`}
            >
              <Switch
                id="pay-with-card"
                checked={onlinePayment}
                onClick={() => setOnlinePayment(!onlinePayment)}
              />
              <Label
                htmlFor="pay-with-card"
                className={`font-semibold flex flex-1 items-center justify-between ${
                  !onlinePayment && 'text-gray-100'
                }`}
              >
                <span>Donate with Paystack</span>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="relative h-7 w-10">
                    <Image
                      src={MasterCard}
                      fill
                      alt="master card logo"
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-7 w-10">
                    <Image
                      src={VisaCard}
                      alt="master card logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-7 w-10">
                    <Image
                      src={VerveCard}
                      alt="master card logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Label>
            </div>
            <div
              className={`flex items-center space-x-2 border border-gray-500 px-3 py-2 text-lg uppercase lg:text-xl bg-[#bd873c] ${
                onlinePayment && 'bg-opacity-50'
              }`}
            >
              <Switch
                id="pay-with-transfer"
                checked={!onlinePayment}
                onClick={() => setOnlinePayment(!onlinePayment)}
              />
              <Label
                htmlFor="pay-with-transfer"
                className={`font-semibold flex flex-1 items-center justify-between ${
                  onlinePayment && 'text-gray-100'
                }`}
              >
                <span>Donate with Bank Transfer</span>
                <BsBank size={20} className="hidden sm:block" />
              </Label>
            </div>
          </div>

          {/* Bank details */}
          <div
            className={` ${
              onlinePayment
                ? 'opacity-0 h-0 scale-95 pointer-events-none'
                : 'flex flex-col space-y-3 md:text-lg bg-transparent max-w-2xl mt-5 p-4 rounded-md border border-gray-500 transition-all ease-in-out duration-500 transform scale-100 opacity-100'
            } `}
          >
            <h3 className="text-gray-100 uppercase underline">
              Cash, Cheques and Bank Drafts
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col space-y-1 bg-[#bd873c] bg-opacity-80 p-2 rounded-md text-gray-900">
                <h3 className="underline uppercase">
                  <span className="font-bold">Bank:</span> Grooming Microfinance
                  Bank
                </h3>
                <p>Account Name: Rev Fr Stanley Ukasoanya Foundation</p>
                <p>
                  Account Number:{' '}
                  <span className="font-semibold">1101840295</span>
                </p>
              </div>

              <div className="flex flex-col space-y-1 bg-[#bd873c] bg-opacity-80 p-2 rounded-md text-gray-900">
                <h3 className="underline uppercase">
                  <span className="font-bold">Bank:</span> Zenith Bank Nig Plc.
                </h3>
                <p>Account Name: Rev Fr Stanley Ukasoanya Foundation</p>
                <p>Account Number:</p>
                <p className="font-semibold">(Naira) 1312027451</p>
                <p className="font-semibold">(US Dollar) 5074778765</p>
              </div>
            </div>
          </div>

          {/* Donation Summary */}
          <div
            className={`${
              !onlinePayment
                ? 'opacity-0 h-0 scale-95 pointer-events-none'
                : 'opacity-100 scale-100 transition-all duration-500 ease-in-out transform bg-gray-300 rounded-sm'
            }`}
          >
            <h3 className="text-lg lg:text-xl uppercase font-bold border border-gray-500 p-5 underline">
              Donation Summary
            </h3>
            <div className="p-5 flex items-center justify-between text-base md:text-lg lg:text-xl font-semibold uppercase border border-gray-400">
              <p>Payment Amount</p>
              <p className="font-medium">₦{numeral(amount).format('0, 0')}</p>
            </div>
            <div className="p-5 flex items-center justify-between text-base md:text-lg lg:text-xl font-semibold uppercase border border-gray-400">
              <p>Giving Frequency</p>
              <div className="text-right">
                <p className="font-medium">
                  {recurring ? paymentInterval + 'ly' : 'One time'}
                </p>
                <p
                  className={`${
                    recurring ? 'text-xs capitalize text-red-600' : 'hidden'
                  }`}
                >
                  *Donations would be made {paymentInterval}ly
                </p>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between text-base md:text-lg lg:text-xl font-semibold uppercase">
              <p>Donation Total</p>
              <p className="font-medium">₦{numeral(amount).format('0, 0')}</p>
            </div>
          </div>

          {/* submit */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div>
              {/* Recurring Donation acceptance */}
              {recurring && onlinePayment && (
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center space-x-2 text-gray-100">
                    <Checkbox
                      id="recurring_terms"
                      checked={acceptRecurring}
                      className="border border-gray-100 rounded-none"
                      onClick={(e) => {
                        e.preventDefault();
                        setAcceptRecurring(!acceptRecurring);
                        setFundsTransferred(false);
                      }}
                    />
                    <label
                      htmlFor="recurring_terms"
                      className="text-xs  lowercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Click to accept {paymentInterval}ly donations
                    </label>
                  </div>
                  {onlinePayment && recurring && (
                    <button
                      className=" bg-gray-300 text-red-600 px-2 font-bold rounded-md text-sm"
                      onClick={() => {
                        setRecurring(false);
                        setAcceptRecurring(false);
                        setFundsTransferred(false);
                      }}
                    >
                      Undo
                    </button>
                  )}
                </div>
              )}

              {/* Funds Transfer Acknowledgement */}
              {!onlinePayment && (
                <div className="flex items-center space-x-2 text-gray-100">
                  <Checkbox
                    id="fund_transfer_acknowledgement"
                    checked={fundsTransferred}
                    className="border border-gray-100 rounded-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setFundsTransferred(!fundsTransferred);
                      setAcceptRecurring(false);
                      setRecurring(false);
                    }}
                  />
                  <label
                    htmlFor="fund_transfer_acknowledgement"
                    className="text-xs lowercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Click to confirm bank transfer
                  </label>
                </div>
              )}
            </div>

            {/* Recurring Payment button */}
            {onlinePayment && (
              <Button
                type="submit"
                disabled={buttonActive()}
                className={`md:text-lg lg:text-xl uppercase bg-[#bd873c] font-semibold ${
                  !acceptRecurring || !fundsTransferred ? 'bg-opacity-50' : ''
                } hover:text-[#bd873c] hover:border hover:border-gray-500 w-full max-w-xl`}
              >
                Make Donation
              </Button>
            )}

            {/* Bank Transfer button */}
            {!onlinePayment && (
              <Button
                type="submit"
                disabled={!fundsTransferred}
                className={`md:text-lg lg:text-xl uppercase bg-[#bd873c] font-semibold ${
                  onlinePayment || !fundsTransferred ? 'bg-opacity-50' : ''
                } hover:text-[#bd873c] hover:border hover:border-gray-500 w-full max-w-xl`}
              >
                I have made a transfer
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Payment;
