export const AddressCard = ({ address, deleteAddress, id }) => {
    return (
      <div className="pd-sm flex-col align-i-start gap-sm bs-lighter">
        <div>
          <span className="txt-sm pd-xs bg-lighter">{address.label}</span>
        </div>
        <div className="d-flex gap-sm">
          <h3 className="txt-semibold"> {address.addresseeName} </h3>
          <h3 className="txt-semibold"> {address.phoneNumber} </h3>
        </div>
        <div className="txt-left">
          <span>
            {address.fullAddress + ", " + address.city + ", " + address.state}
          </span>
          <span className="txt-semibold">{" - " + address.pincode}</span>
        </div>
        <div className="d-flex gap-md">
          <button className="tr-btn tr-btn-icon">
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={() => deleteAddress(address.id)}
            className="tr-btn tr-btn-icon"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  };
  