import { Link } from "@chakra-ui/react";
import "./CheckBoxGroup.css";

const CheckBoxGroup = () => {
  return (
    <div className="furni_checkbox">
      <input type="checkbox" name="" id="" />
      <label htmlFor="">
        I agree to the{" "}
        <Link href="#" color={"black"}>
          Terms & Policy
        </Link>{" "}
      </label>
    </div>
  );
};

export default CheckBoxGroup;
