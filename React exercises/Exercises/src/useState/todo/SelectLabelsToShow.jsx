import React from "react";
import { v4 as uuidv4 } from "uuid";

const selectLabelsToShow = ({ labels, setLabel }) => {
  const createRadioButtons = (label) => (
    <label key={uuidv4()}>
      {label}
      <input
        onChange={() => setLabel(label)}
        className="tr-input-radio"
        type="radio"
        name="todoLabel"
      />
    </label>
  );
  return (
    <div className="d-flex f-wrap gap-sm">{labels.map(createRadioButtons)}</div>
  );
};

export default selectLabelsToShow;
