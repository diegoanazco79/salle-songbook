import React from 'react';

import { ButtonProps, Button as NextUIButton } from '@nextui-org/react';

interface Props extends ButtonProps {
  children: React.ReactNode;
  typeStyle: 'primary' | 'secondary'
}

const Button = (props: Props) => {
  const { typeStyle, children, ...buttonProps } = props;

  const currentStyle = typeStyle === 'primary'
    ? 'bg-lightPurple-900 hover:bg-lightPurple-950 text-white'
    : 'bg-transparent border border-lightPurple-950 hover:bg-lightPurple-100 text-lightPurple-950';

  return (
    <NextUIButton
      className={`${props.className} ${currentStyle} transition ease-in-out duration-300 `}
      {...buttonProps}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
