import React, { useLayoutEffect, useState } from "react";
import { Stack } from "@mui/material";

import {
  ArrowRight,
  ButtonContent,
  ButtonImage,
  ButtonText,
  DashboardButtonContainer,
  RippleContainer,
} from "./dashboard-button.styles";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

export const Ripple = ({ duration = 850, color = "#fff" }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;

    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray((prevState) => [...prevState, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"ripple_" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

const DashboardButton = ({ buttonText, buttonImage, textIcon, gapless, onClick }) => {
  return (
    <DashboardButtonContainer gapless={gapless} onClick={onClick}>
      <Stack direction="row" gap="10px" alignItems="center">
        <ButtonContent gapless={gapless}>
          {buttonImage && <ButtonImage src={buttonImage} style={{ width: "24px", height: "24px" }} />}
          <ButtonText>{buttonText}</ButtonText>
        </ButtonContent>
        {textIcon && <ArrowRight />}
      </Stack>
      <Ripple />
    </DashboardButtonContainer>
  );
};

export default DashboardButton;
