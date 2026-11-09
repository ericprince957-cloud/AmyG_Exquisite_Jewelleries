import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  formatPrice,
  generateOrderRef,
  paymentConfig,
} from "../config/amyg";
import {
  CreditCard,
  Landmark,
  Lock,
  Check,
  Copy,
  CheckCircle2,
  Clock3,
  ShoppingBag,
  ArrowLeft,
  Loader2,
  Info,
} from "lucide-react";

type PaymentMethod = "card" | "transfer";
type CheckoutStage = "pay" | "processing" | "success";

interface CompletedOrder {
  ref: string;
  method: PaymentMethod;
  total: number;
  itemCount: number;
}

// ---- Input formatters (demo card UI) ----
const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");

const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const formatCvv = (value: string) => value.replace(/\D/g, "").slice(0, 4);

function TransferRow({
  label,
  value,
  copyKey,
  copied,
  onCopy,
  mono = false,
}: {
  label: string;
  value: string;
  copyKey: string;
  copied: string | null;
  onCopy: (value: string, key: string) => void;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-brand-mocha">
          {label}
        </p>
        <p
          className={`text-sm font-semibold text-brand-charcoal truncate ${
            mono ? "font-mono tracking-wider" : ""
          }`}
        >
          {value}
        </p>
      </div>
      <button
        onClick={() => onCopy(value, copyKey)}
        className="flex items-center gap-1.5 text-xs font-medium text-brand-champagne hover:text-brand-champagne-dark transition-colors px-2 py-1 shrink-0"
        aria-label={`Copy ${label}`}
      >
        {copied === copyKey ? (
          <>
            <Check size={14} />
            Copied
          </>
        ) : (
          <>
            <Copy size={14} />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

export function CheckoutPage() {
  const { items, itemCount, subtotal, deliveryFee, total, clearCart } =
    useCart();

  const [stage, setStage] = useState<CheckoutStage>("pay");
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [completedOrder, setCompletedOrder] = useState<CompletedOrder | null>(
    null
  );

  // Card form state
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardError, setCardError] = useState<string | null>(null);

  // Transfer state
  const [transferRef] = useState(() => generateOrderRef());
  const [copied, setCopied] = useState<string | null>(null);

  const bank = paymentConfig.bankTransfer;

  const cardValid = cardNumber.replace(/\s/g, "").length === 16;
  const expiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
  const cvvValid = /^\d{3,4}$/.test(cvv);

  const copyText = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard unavailable — value can still be copied manually
    }
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const finalizeOrder = (orderMethod: PaymentMethod) => {
    setCompletedOrder({
      ref: orderMethod === "transfer" ? transferRef : generateOrderRef(),
      method: orderMethod,
      total,
      itemCount,
    });
    clearCart();
    setStage("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCardPay = () => {
    if (!cardValid || !expiryValid || !cvvValid) {
      setCardError(
        `Please enter valid demo card details — e.g. ${paymentConfig.testCard}, 12/34, 123.`
      );
      return;
    }
    setCardError(null);
    setStage("processing");
    // Simulated payment processing (demo only — no real charge happens)
    setTimeout(() => finalizeOrder("card"), 2200);
  };

  const handleTransferDone = () => {
    setStage("processing");
    setTimeout(() => finalizeOrder("transfer"), 1500);
  };

  // ---------- Empty cart guard ----------
  if (items.length === 0 && stage === "pay") {
    return (
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-md mx-auto text-center bg-brand-white rounded-3xl border border-brand-sand p-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-cream flex items-center justify-center">
            <ShoppingBag className="text-brand-champagne" size={32} />
          </div>
          <h1 className="font-serif text-2xl font-semibold text-brand-charcoal mb-3">
            Nothing to Check Out
          </h1>
          <p className="text-brand-mocha leading-relaxed mb-8">
            Your cart is empty. Add a piece to the cart first — your total will
            be calculated automatically at checkout.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // ---------- Processing ----------
  if (stage === "processing") {
    return (
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-md mx-auto text-center bg-brand-white rounded-3xl border border-brand-sand p-10">
          <Loader2
            size={44}
            className="mx-auto text-brand-champagne animate-spin-slow mb-6"
          />
          <h1 className="font-serif text-2xl font-semibold text-brand-charcoal mb-2">
            {method === "card" ? "Processing Payment…" : "Confirming Transfer…"}
          </h1>
          <p className="text-brand-mocha">Please don't close this window.</p>
        </div>
      </div>
    );
  }

  // ---------- Success ----------
  if (stage === "success" && completedOrder) {
    const isTransfer = completedOrder.method === "transfer";
    return (
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-lg mx-auto text-center bg-brand-white rounded-3xl border border-brand-sand p-8 sm:p-10 animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-600/30 flex items-center justify-center mx-auto mb-6">
            {isTransfer ? (
              <Clock3 size={36} className="text-green-600" />
            ) : (
              <CheckCircle2 size={36} className="text-green-600" />
            )}
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-3">
            {isTransfer ? "Transfer Received" : "Payment Successful"}
          </h1>
          <p className="text-brand-mocha text-sm mb-1">Order reference</p>
          <p className="font-mono text-lg font-semibold text-brand-charcoal tracking-wider mb-4">
            {completedOrder.ref}
          </p>
          <p className="text-brand-mocha leading-relaxed mb-6">
            {isTransfer
              ? `We've recorded your transfer of ${formatPrice(
                  completedOrder.total
                )}. Your order will be confirmed as soon as the payment is verified.`
              : `Your card payment of ${formatPrice(
                  completedOrder.total
                )} went through. Your jewellery will be on its way shortly.`}
          </p>
          <div className="bg-brand-cream rounded-xl p-4 text-xs text-brand-mocha leading-relaxed mb-6">
            This is a demo checkout — no real payment was processed and no
            personal details were collected.
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // ---------- Pay screen ----------
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm text-brand-mocha hover:text-brand-champagne transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to cart
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mb-2">
          Checkout
        </h1>
        <p className="text-brand-mocha text-sm mb-6">
          {itemCount} {itemCount === 1 ? "item" : "items"} · total calculated
          automatically
        </p>

        {/* Demo notice */}
        <div className="flex items-start gap-3 bg-brand-cream border border-brand-champagne/30 rounded-2xl p-4 text-sm text-brand-mocha mb-8">
          <Info size={18} className="text-brand-champagne shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-brand-charcoal">
              Demo checkout.
            </span>{" "}
            No real payment is processed and no personal details are collected.
            For the card option, use the test card{" "}
            <span className="font-mono">{paymentConfig.testCard}</span> with
            any future expiry and any 3-digit CVV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* Payment */}
          <div>
            {/* Method selector */}
            <p className="text-sm font-semibold text-brand-charcoal mb-3">
              Payment method
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setMethod("card")}
                className={`flex items-start gap-3 p-4 rounded-2xl border-2 text-left transition-colors ${
                  method === "card"
                    ? "border-brand-charcoal bg-brand-white"
                    : "border-brand-sand bg-brand-white hover:border-brand-champagne/50"
                }`}
                aria-pressed={method === "card"}
              >
                <CreditCard
                  size={22}
                  className={
                    method === "card"
                      ? "text-brand-champagne"
                      : "text-brand-mocha"
                  }
                />
                <span>
                  <span className="block text-sm font-semibold text-brand-charcoal">
                    Debit / Credit Card
                  </span>
                  <span className="block text-xs text-brand-mocha mt-1">
                    Instant, secure payment
                  </span>
                </span>
              </button>
              <button
                onClick={() => setMethod("transfer")}
                className={`flex items-start gap-3 p-4 rounded-2xl border-2 text-left transition-colors ${
                  method === "transfer"
                    ? "border-brand-charcoal bg-brand-white"
                    : "border-brand-sand bg-brand-white hover:border-brand-champagne/50"
                }`}
                aria-pressed={method === "transfer"}
              >
                <Landmark
                  size={22}
                  className={
                    method === "transfer"
                      ? "text-brand-champagne"
                      : "text-brand-mocha"
                  }
                />
                <span>
                  <span className="block text-sm font-semibold text-brand-charcoal">
                    Bank Transfer
                  </span>
                  <span className="block text-xs text-brand-mocha mt-1">
                    Pay directly from your bank app
                  </span>
                </span>
              </button>
            </div>

            {/* Card form */}
            {method === "card" && (
              <div className="bg-brand-white rounded-2xl border border-brand-sand p-6 space-y-4 animate-fade-in-up">
                <div>
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-brand-charcoal mb-1.5"
                  >
                    Card Number
                  </label>
                  <input
                    id="card-number"
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(formatCardNumber(e.target.value))
                    }
                    placeholder="4242 4242 4242 4242"
                    inputMode="numeric"
                    autoComplete="off"
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-sand bg-brand-ivory focus:border-brand-champagne focus:outline-none text-brand-charcoal font-mono tracking-wider"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="card-expiry"
                      className="block text-sm font-medium text-brand-charcoal mb-1.5"
                    >
                      Expiry (MM/YY)
                    </label>
                    <input
                      id="card-expiry"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      placeholder="12/34"
                      inputMode="numeric"
                      autoComplete="off"
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-sand bg-brand-ivory focus:border-brand-champagne focus:outline-none text-brand-charcoal font-mono tracking-wider"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="card-cvv"
                      className="block text-sm font-medium text-brand-charcoal mb-1.5"
                    >
                      CVV
                    </label>
                    <input
                      id="card-cvv"
                      value={cvv}
                      onChange={(e) => setCvv(formatCvv(e.target.value))}
                      placeholder="123"
                      inputMode="numeric"
                      autoComplete="off"
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-sand bg-brand-ivory focus:border-brand-champagne focus:outline-none text-brand-charcoal font-mono tracking-wider"
                    />
                  </div>
                </div>

                {cardError && (
                  <p className="text-sm text-red-600">{cardError}</p>
                )}

                <button
                  onClick={handleCardPay}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-semibold rounded-full transition-colors touch-target"
                >
                  <Lock size={16} />
                  Pay {formatPrice(total)}
                </button>
                <p className="text-xs text-brand-mocha text-center">
                  Demo payment — do not enter real card details.
                </p>
              </div>
            )}

            {/* Bank transfer */}
            {method === "transfer" && (
              <div className="bg-brand-white rounded-2xl border border-brand-sand p-6 space-y-5 animate-fade-in-up">
                <p className="text-sm text-brand-mocha leading-relaxed">
                  Transfer the exact total below, using your order reference as
                  the transfer narration. We confirm transfers as soon as they
                  land.
                </p>
                <div className="bg-brand-cream rounded-2xl p-5 space-y-4">
                  <TransferRow
                    label="Bank"
                    value={bank.bankName}
                    copyKey="bank"
                    copied={copied}
                    onCopy={copyText}
                  />
                  <TransferRow
                    label="Account Name"
                    value={bank.accountName}
                    copyKey="name"
                    copied={copied}
                    onCopy={copyText}
                  />
                  <TransferRow
                    label="Account Number"
                    value={bank.accountNumber}
                    copyKey="number"
                    copied={copied}
                    onCopy={copyText}
                    mono
                  />
                  <TransferRow
                    label="Amount"
                    value={formatPrice(total)}
                    copyKey="amount"
                    copied={copied}
                    onCopy={copyText}
                  />
                  <TransferRow
                    label="Reference (use as narration)"
                    value={transferRef}
                    copyKey="ref"
                    copied={copied}
                    onCopy={copyText}
                    mono
                  />
                </div>
                <button
                  onClick={handleTransferDone}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-semibold rounded-full transition-colors touch-target"
                >
                  <Check size={18} />
                  I've Completed the Transfer
                </button>
                <p className="text-xs text-brand-mocha text-center">
                  Demo checkout — the bank details above are placeholders.
                </p>
              </div>
            )}
          </div>

          {/* Order summary */}
          <aside className="h-fit bg-brand-white rounded-2xl border border-brand-sand p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-xl font-semibold text-brand-charcoal mb-5">
              Order Summary
            </h2>
            <div className="space-y-3 mb-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-brand-cream shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-charcoal truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-brand-mocha">
                      Qty {quantity}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-brand-charcoal shrink-0">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm border-t border-brand-sand pt-4">
              <div className="flex justify-between">
                <span className="text-brand-mocha">Subtotal</span>
                <span className="font-medium text-brand-charcoal">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-mocha">Delivery</span>
                {deliveryFee === 0 ? (
                  <span className="font-medium text-green-700">FREE</span>
                ) : (
                  <span className="font-medium text-brand-charcoal">
                    {formatPrice(deliveryFee)}
                  </span>
                )}
              </div>
              <div className="border-t border-brand-sand pt-3 flex justify-between items-baseline">
                <span className="font-serif font-semibold text-brand-charcoal">
                  Total
                </span>
                <span className="font-serif text-2xl font-bold text-brand-charcoal">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-brand-mocha">
              <Lock size={12} className="text-brand-champagne" />
              Totals are calculated automatically — demo checkout.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
