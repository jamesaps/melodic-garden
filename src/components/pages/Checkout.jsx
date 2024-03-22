import { PhotoIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import CheckoutTextInput from "../CheckoutTextInput";
import { useEffect, useState } from "react";
import CheckoutSelectInput from "../CheckoutSelectInput";
import CheckoutCheckboxInput from "../CheckoutCheckboxInput";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../contexts/CartContext";
import CheckoutSuccessModal from "../CheckoutSuccessModal";
import CheckoutFailureModal from "../CheckoutFailureModal";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    region: "",
    zip: "",
    country: "Canada",
    shippingSameAsBilling: true,
    shippingAddress: "",
    shippingCity: "",
    shippingRegion: "",
    shippingZip: "",
    shippingCountry: "Canada",
    creditCardName: "",
    creditCardNumber: "",
    creditCardExpiryMonth: "",
    creditCardExpiryYear: "",
  });

  const {
    cartItems,
    updateProductQuantityInCart,
    getNumberOfItemsInCart,
    totalPrice,
    emptyCart,
  } = useCart();

  const { products } = useProducts();

  const setFormValue = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const [submittingForm, setSubmittingForm] = useState(false);
  const [formErrors, setFormErrors] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [failureModalOpen, setFailureModalOpen] = useState(false);

  const handleFormSubmission = async () => {
    if (submittingForm) {
      console.log("Form already processing");
      return;
    }

    setSubmittingForm(true);
    setFormErrors(null);

    const corsProxyURLPrefix = "https://corsproxy.io/?";
    const mailjetApiURL = "https://api.mailjet.com/v3.1/send";

    const mailjetPublicKey = "dbb03e3d123802523ea56afb6038ed4a";
    const mailjetPrivateKey = "bd8f4443da206ca8b89319929e879e5e";

    const user = `${mailjetPublicKey}:${mailjetPrivateKey}`;

    const orderTemplate = `
        <h1>Thank you for your order.</h1>
        <br />
        <p>Hi ${formData.firstName},</p>
        <p> Please find your order details below:</p>
        <br />
        <h2>Order Summary</h2>
        <ul>
            ${cartItems
              .map((item) => {
                const product = products.find((p) => {
                  return p.Id === item.productId;
                });

                if (product === undefined) {
                  return undefined;
                }

                return `<li><b>${product.Name}</b> - quantity: ${item.quantity} - price per unit: £${product.Price.toFixed(2)}</li>`;
              })
              .filter((item) => item !== undefined)
              .join("\n")}
        </ul>

        <p><b>Total cost: £${totalPrice}</b> billed to **** **** **** ${formData.creditCardNumber.substring(15, 19)}</p>

        <br />

        <p><b>Shipping to:</b></p>
        <ul style="list-style: none; padding-left: 0;">
            <li>${formData.firstName} ${formData.lastName}</li>
            <li>${formData.address}</li>
            <li>${formData.city}</li>
            <li>${formData.country}</li>
            <li>${formData.zip}</li>
        </ul>

        <br />

        <h2>Plant Care Instructions</h2>
        <br />

        <ul>
            ${cartItems
              .map((item) => {
                const product = products.find((p) => {
                  return p.Id === item.productId;
                });

                if (product === undefined) {
                  return undefined;
                }

                return `<li><b>${product.Name}</b>: ${product.Care}</li>`;
              })
              .filter((item) => item !== undefined)
              .join("\n")}
        </ul>

        <br />
        Thank you for shopping with <a href="https://melodicgarden.netlify.app/">Melodic Garden!</a>
    `;

    const apiOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(user)}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: "melodicgarden@proton.me", Name: "Melodic Garden" },
            To: [{ Email: formData.email, Name: formData.firstName }],
            Subject: `Thank you for your order!`,
            TextPart: "Thank you from Melodic Garden!",
            HTMLPart: orderTemplate,
          },
        ],
      }),
    };

    const url = `${corsProxyURLPrefix}${encodeURIComponent(mailjetApiURL)}`;

    try {
      const response = await fetch(url, apiOptions);
      setSubmittingForm(false);

      if (response.ok) {
        const data = await response.json();
        setSubmittingForm(false);
        console.log(data);

        setModalOpen(true);
        emptyCart();
      } else {
        setFailureModalOpen(true);
        console.log("Error submitting form");
      }
    } catch (e) {
      setSubmittingForm(false);
      setFormErrors(e);
      setFailureModalOpen(true);
      console.log("Error submitting form");
    }
  };

  return (
    <>
      <CheckoutSuccessModal open={modalOpen} setOpen={setModalOpen} />
      <CheckoutFailureModal
        open={failureModalOpen}
        setOpen={setFailureModalOpen}
      />
      {cartItems.length === 0 ? (
        <div className="m-16 flex flex-1 items-center justify-center">
          <p className="text-gray-800">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <CheckoutSuccessModal open={modalOpen} setOpen={setModalOpen} />
          <div className="container mx-auto mb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="mt-32 text-center text-xl font-bold text-gray-900">
              CHECKOUT
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4">
              <form className="lg:col-span-3" onSubmit={handleFormSubmission}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Let us know who you are.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <CheckoutTextInput
                          label="First Name"
                          name="first-name"
                          placeholder=""
                          autoComplete="given-name"
                          value={formData.firstName}
                          setValue={(value) => setFormValue("firstName", value)}
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <CheckoutTextInput
                          label="Last Name"
                          name="last-name"
                          placeholder=""
                          autoComplete="family-name"
                          value={formData.lastName}
                          setValue={(value) => setFormValue("lastName", value)}
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <CheckoutTextInput
                          label="Email Address"
                          name="email"
                          placeholder=""
                          autoComplete="email"
                          value={formData.email}
                          setValue={(value) => setFormValue("email", value)}
                          type="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Billing Address
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      The address linked to your bank card.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <CheckoutTextInput
                          label="Street Address"
                          name="address"
                          placeholder=""
                          autoComplete="street-address"
                          value={formData.address}
                          setValue={(value) => setFormValue("address", value)}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <CheckoutSelectInput
                          label="Country"
                          name="country"
                          placeholder=""
                          autoComplete="country-name"
                          value={formData.country}
                          setValue={(value) => setFormValue("country", value)}
                          countries={[
                            "Canada",
                            "United Kingdom",
                            "United States",
                          ]}
                        />
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <CheckoutTextInput
                          label="City / Town"
                          name="city"
                          placeholder=""
                          autoComplete="address-level2"
                          value={formData.city}
                          setValue={(value) => setFormValue("city", value)}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <CheckoutTextInput
                          label="State / Province"
                          name="region"
                          placeholder=""
                          autoComplete="address-level1"
                          value={formData.region}
                          setValue={(value) => setFormValue("region", value)}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <CheckoutTextInput
                          label="ZIP / Postal Code"
                          name="zip"
                          placeholder=""
                          autoComplete="postal-code"
                          value={formData.zip}
                          setValue={(value) => setFormValue("zip", value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Shipping Address
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Where you want us to send your plants.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <fieldset>
                          <CheckoutCheckboxInput
                            name="shipping-address-same-as-billing"
                            label="Shipping address is same as billing address"
                            value={formData.shippingSameAsBilling}
                            setValue={(value) =>
                              setFormValue("shippingSameAsBilling", value)
                            }
                          />
                        </fieldset>
                      </div>

                      {!formData.shippingSameAsBilling && (
                        <>
                          <div className="sm:col-span-4">
                            <CheckoutTextInput
                              label="Street Address"
                              name="address"
                              placeholder=""
                              autoComplete="street-address"
                              value={formData.shippingAddress}
                              setValue={(value) =>
                                setFormValue("shippingAddress", value)
                              }
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <CheckoutSelectInput
                              label="Country"
                              name="country"
                              placeholder=""
                              autoComplete="country-name"
                              value={formData.shippingCountry}
                              setValue={(value) =>
                                setFormValue("shippingCountry", value)
                              }
                              countries={[
                                "Canada",
                                "United Kingdom",
                                "United States",
                              ]}
                            />
                          </div>

                          <div className="sm:col-span-2 sm:col-start-1">
                            <CheckoutTextInput
                              label="City / Town"
                              name="city"
                              placeholder=""
                              autoComplete="address-level2"
                              value={formData.shippingCity}
                              setValue={(value) =>
                                setFormValue("shippingCity", value)
                              }
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <CheckoutTextInput
                              label="State / Province"
                              name="region"
                              placeholder=""
                              autoComplete="address-level1"
                              value={formData.shippingRegion}
                              setValue={(value) =>
                                setFormValue("shippingRegion", value)
                              }
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <CheckoutTextInput
                              label="ZIP / Postal Code"
                              name="zip"
                              placeholder=""
                              autoComplete="postal-code"
                              value={formData.shippingZip}
                              setValue={(value) =>
                                setFormValue("shippingZip", value)
                              }
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Billing Details
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Your bank details.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-2">
                        <CheckoutTextInput
                          label="Name on Card"
                          name="card-name"
                          placeholder=""
                          autoComplete="cc-name"
                          value={formData.cardName}
                          setValue={(value) => setFormValue("cardName", value)}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <CheckoutTextInput
                          label="Card Number"
                          name="card-number"
                          placeholder="1234 1234 1234 1234"
                          creditCard={true}
                          autoComplete="cc-number"
                          value={formData.creditCardNumber}
                          setValue={(value) =>
                            setFormValue("creditCardNumber", value)
                          }
                        />
                      </div>

                      <div className="flex items-center justify-center sm:col-span-2">
                        {submittingForm ? (
                          <>
                            <svg
                              className="animate-spin text-gray-300"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                            >
                              <path
                                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-900"
                              ></path>
                            </svg>
                          </>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleFormSubmission();
                            }}
                            disabled={submittingForm}
                            className=" font-large mt-4 w-full rounded-lg bg-lime-600 px-5 py-3 text-center text-xl font-bold text-white hover:bg-lime-700 disabled:opacity-50"
                          >
                            Pay now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="col-span-1 flex flex-col p-4">
                {cartItems.map((cartItem, index) => {
                  const product = products.find((product) => {
                    return product.Id === cartItem.productId;
                  });

                  if (product === undefined) {
                    return;
                  }

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex w-full gap-4">
                        <NavLink to={`/products/${product.Id}`} className="p-2">
                          <img
                            src={product.Image}
                            alt={product.Name}
                            className="bg-product-card-background h-16 max-h-16 w-16 max-w-16 rounded-md object-cover object-top "
                          />
                        </NavLink>

                        <div className="flex w-full flex-col justify-between">
                          <div className="flex flex-col">
                            <h3 className="font-bold">{product.Name}</h3>
                            <p>Size: {product.Size}</p>
                          </div>

                          <p>Quantity: {cartItem.quantity}</p>
                          <div className="mb-6 flex flex-col items-start justify-between">
                            <p>£{product.Price.toFixed(2)}</p>
                            <p
                              className="cursor-pointer text-xs text-pink-600"
                              onClick={() => {
                                updateProductQuantityInCart(product.Id, 0);
                              }}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div>Total:</div>
                <p className="">
                  <span className="text-3xl font-bold">
                    £{totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
