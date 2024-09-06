// @paystack/inline-js.d.ts
declare module '@paystack/inline-js' {
  export default class PaystackPop {
    // Starts a new transaction on the Paystack checkout form
    newTransaction(options: PaystackTransactionOptions): void;
  }

  interface PaystackTransactionOptions {
    // Required Options
    key: string | undefined; // Your Paystack public key
    amount: number; // The amount of the transaction in kobo
    email: string; // The email address of the customer

    // Optional Options
    currency?: string; // The currency of the transaction
    firstName?: string; // The first name of the customer
    lastName?: string; // The last name of the customer
    phone?: string; // The phone number of the customer
    customerCode?: string; // A valid Paystack customer code
    channels?: string[]; // An array of payment channels to use
    paymentRequest?: string; // A valid Paystack payment request ID
    paymentPage?: string; // A valid Paystack payment page ID
    metadata?: Record<string, any>; // A valid object of extra information to be saved to the transaction
    reference?: string; // Unique case-sensitive transaction reference

    // Callback Options
    onError?: (error: { message: string }) => void; // Called when the transaction was not successfully loaded
    onCancel?: () => void; // Called when the customer cancels the transaction
    onLoad?: (response: {
      id: string;
      customer: Record<string, any>;
      accessCode: string;
    }) => void; // Called when the transaction is successfully loaded
    onSuccess?: (response: {
      id: string;
      reference: string;
      message: string;
    }) => void; // Called when the customer successfully completes a transaction

    // Split Payments Options
    subaccountCode?: string; // A valid Paystack subaccount code
    split_code?: string; // A valid Paystack split code
    bearer?: 'account' | 'subaccount'; // Who bears the Paystack charges
    transactionCharge?: string; // A flat fee to charge the subaccount

    // Subscribing to an Existing Plan Options
    planCode?: string; // A valid Paystack plan code
    subscriptionCount?: number; // Number of subscriptions to create for this plan

    // Creating a New Subscription Options
    planInterval?: string; // Interval for the plan
    subscriptionLimit?: number; // The number of times to charge for this subscription
    subscriptionStartDate?: string; // The start date for the subscription
  }
}
