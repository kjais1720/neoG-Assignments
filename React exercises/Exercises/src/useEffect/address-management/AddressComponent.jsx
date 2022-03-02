import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddressCard } from "./AddressCard";
import { AddressForm } from "./AddressForm";

export const AddressComponent = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "home",
      addresseeName: "Chanandler bong",
      phoneNumber: 7749858984,
      pincode: 123456,
      fullAddress: "123 yemen street, Yemen",
      city: "Yemen city",
      state: "Yemen state"
    }
  ]);

  useEffect(() => setShowForm(false), [addresses]);
  const [showForm, setShowForm] = useState(false);

  const deleteAddress = (id) => {
    setAddresses((curr) => curr.filter((address) => address.id !== id));
  };

  return (
    <div className=" mr-x-auto pd-xlg flex-col align-i-start">
      <button
        onClick={() => setShowForm((curr) => !curr)}
        className="tr-btn tr-btn-primary"
      >
        Add New Address
      </button>
      <AddressForm setAddresses={setAddresses} showForm={showForm} />
      {addresses[0] &&
        addresses.map((address) => (
          <AddressCard
            key={uuidv4()}
            address={address}
            deleteAddress={deleteAddress}
          />
        ))}
    </div>
  );
};
