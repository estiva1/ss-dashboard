import { styled } from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  inset: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export const ButtonImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
  transition: transform 1s ease-in-out;
`;

export const DashboardButtonContainer = styled.button`
  position: relative;
  overflow: hidden;
  width: max-content;
  min-height: 50px;
  padding: 12px ${(props) => (props.gapless ? "13px" : "24px")};
  border: none;
  border-radius: 25px;
  background-color: #1565d8;
  font-family: Titillium Web;
  color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);

    & ${ButtonImage} {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => (props.gapless ? "0px" : "24px")};
`;

export const ButtonText = styled.h3`
  color: #fff;
  text-transform: initial;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  margin: 0;
`;

export const ArrowRight = styled.span`
  min-width: 16px;
  min-height: 12px;
  width: 16px;
  height: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' fill='none'%3e%3cpath fill='%23fff' d='M9.3 10.85a.95.95 0 0 1-.29-.72c.01-.29.11-.53.31-.73l2.83-2.83H1a.97.97 0 0 1-.71-.28.96.96 0 0 1-.29-.71c0-.29.1-.53.29-.72A.97.97 0 0 1 1 4.57h11.15L9.3 1.73a.97.97 0 0 1-.3-.7c0-.28.1-.52.3-.72.2-.2.44-.3.71-.3.28 0 .52.1.71.3l4.58 4.58c.1.1.17.2.21.32.04.12.07.24.06.38 0 .13-.02.25-.06.37a.89.89 0 0 1-.21.33l-4.6 4.6a.93.93 0 0 1-.69.27.98.98 0 0 1-.71-.3Z'/%3e%3c/svg%3e")`};
`;
