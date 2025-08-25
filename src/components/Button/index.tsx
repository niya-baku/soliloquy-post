import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
