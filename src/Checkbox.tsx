import { useState } from "react";

import classes from "./Checkbox.module.css";

import { ReactComponent as Unchecked } from "./assets/icons/ic_checkbox_unchecked.svg";
import { ReactComponent as Intermediate } from "./assets/icons/ic_checkbox_half.svg";
import { ReactComponent as Checked } from "./assets/icons/ic_checkbox_checked.svg";

const Checkbox = ({ label }: { label?: string }) => {
  const [checked, setChecked] = useState(0);

  const toggle = () => {
    if (checked === 2) {
      return setChecked(0);
    }

    return setChecked((prevValue) => prevValue + 1);
  };

  return (
    <div className={classes.wrapper}>
      <div onClick={toggle} className={classes.checkbox} tabIndex={0}>
        {checked === 0 && <Unchecked />}
        {checked === 1 && <Intermediate />}
        {checked === 2 && <Checked />}
      </div>
      <span className={classes.label}>{label}</span>
    </div>
  );
};

export default Checkbox;
