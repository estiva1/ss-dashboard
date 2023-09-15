import { styled } from "styled-components";

export const Header = styled.h2`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const NoAlertsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 80px;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.0625rem;
  margin: 0;
`;

export const Description = styled.h4`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
`;

export const NoAlertsImage = styled.div`
  min-width: 190px;
  min-height: 190px;
  width: 190px;
  height: 190px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' fill='none'%3e%3cpath fill='%236FD5F6' d='M132.2 19S100 7.2 69 25.2c-31.2 18-46.5 54.3-59.8 83.4-13.2 29-5 59 19.1 72.8 24.1 13.9 40.1-6 73.7-6.5s42.7 4.5 70.3-14.5C200 141.3 204.4 96 182 62c-22.4-34-49.8-42.8-49.8-42.8Z'/%3e%3cpath fill='%23fff' d='M132.2 19S100 7.2 69 25.2c-31.2 18-46.5 54.3-59.8 83.4-13.2 29-5 59 19.1 72.8 24.1 13.9 40.1-6 73.7-6.5s42.7 4.5 70.3-14.5C200 141.3 204.4 96 182 62c-22.4-34-49.8-42.8-49.8-42.8Z' opacity='.7'/%3e%3cpath stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='m161 113.5-5.5 5.4 5.4 5.5 5.5-5.5-5.5-5.4ZM43.1 17l-5.4 5.4 5.4 5.5 5.5-5.5-5.5-5.5Zm-9.9 113.8-3.4 3.4 3.4 3.4 3.4-3.4-3.4-3.4ZM14.1 76l-3.4 3.4 3.4 3.4 3.4-3.4-3.4-3.4Zm138.1-39-3.4 3.3 3.4 3.4 3.4-3.4-3.4-3.4ZM40.8 134.6l-4.8 4.8 4.8 4.8 4.8-4.8-4.8-4.8Zm95.8-5.1-3.4 3.3 3.4 3.4 3.3-3.4-3.3-3.3ZM162.5 30l-6.5 6.5 6.5 6.5 6.4-6.5-6.4-6.5ZM93.2 182.6l-3.4 3.4 3.4 3.4 3.4-3.4-3.4-3.4ZM26 80.8a5 5 0 1 0 0-9.9 5 5 0 0 0 0 9.9Zm142.3 15a4.6 4.6 0 1 0 0-9.3 4.6 4.6 0 0 0 0 9.3ZM185 62a2.7 2.7 0 1 0 0-5.5 2.7 2.7 0 0 0 0 5.4Zm-54.6-38.5a1.6 1.6 0 1 0-3.3 0 1.6 1.6 0 0 0 3.3 0Zm-68.7 94.9a1.6 1.6 0 1 0 0-3.3 1.6 1.6 0 0 0 0 3.3ZM23 163.1a2.5 2.5 0 1 0 0-4.9 2.5 2.5 0 0 0 0 5Zm148.6-6.5a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0Zm-17.5-141a2.2 2.2 0 1 0-4.3 0 2.2 2.2 0 0 0 4.3 0Z' opacity='.3'/%3e%3cpath stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='1.2' d='m66.9 99.3-15.6 8.5M37.4 53.2 54 59.8m3.3-43.7L68 33.3M93.6 8.5 93 22.1M124.7 41l13.9-14m5.4 42 12-4m-23.4 34.6 10 5.7M53.8 40.7l8.1 6.2m79.9 5.5-8.7 4M56.8 82.1 47.5 85m88.9.7 4.4 1'/%3e%3cpath fill='%23fff' stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M140.1 69.4c-1.5-1-7.3 0-11 2.9-3.7 3-4.5 4-4.5 4l-1.7-12c0-.3-2.3-22.1-2.8-25.3a41 41 0 0 0-2-9c-.6-1.1-3.5-1.2-4.4-.8l-1 .5s.5-8.3-.4-10.3c-1-2-4-.8-4.8.2-.8 1.1-1.4 2.8-1.4 2.8s-2.7-1-4.3 2a24 24 0 0 0-3 8.9c-.2 3-1.5 6.7-1.5 6.7s-1.5-2.5-3.2-1c-1.6 1.4-3.5 7-4 11s-1 14.7-1 14.7-.9 4.8-1.4 8.8c-.5 3.9-.1 20.1 1.7 26.9 1.8 6.7 4.1 11 4.1 11l4.8 15.5 7 27.8 19.5-24.7-5.9-16.5c-1-3-1.8-4-1.8-4s6-8.4 9.2-11c3.2-2.4 4.8-10.7 5.6-14.4.9-3.6 4.3-8.7 6.2-10.4 2-1.7 3.6-3.2 2-4.3Zm-43.8-5.7c-.4 0-.3-4.6-.3-10.2 0-5.5 1-8 1-8-.5 2.5.4 14.8.4 15.6 0 .9-.8 2.6-1.1 2.6Z'/%3e%3cpath stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M114.2 111.5c1.5-.7 1.7-1.5 1.7-1.5m-13.4-1.2s6.6 4.3 9.8 3.4m12.3-35.9s-2.5 4-3 5.3c-.7 1.5-1 2.6-2.1 3.2l-2.5 1.5m.4-8.8a23 23 0 0 0-9.6 7.5m13.2-9-2.3.9m-12.2 9.6s-2.2 4-3.1 7m2.7-71.1-1.4 12.4a106 106 0 0 0-1.2 15.9c.1 4.7 1.4 8.9 1.3 9.5m7.9-30.5s-.3 3 0 7.1c.4 4-.3 11.5-.3 14.4l.2 8.4c.1 1.3.9 2.2.9 2.2m1.5.7s.6 1.1 4.5 1.2m-13.5-4s2.8.6 4.7.2m-15 4.8s0 1.2-3.5 2.2'/%3e%3cpath stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M102.4 61.5c.4-.3 1.8-.7 2.2-2.4m-2 20.5s7.4-2.7 12-3.6'/%3e%3cpath fill='%234E5969' stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M123.6 199.7h63.7a1743 1743 0 0 0-21.8-28.4c-1.2-1.2-6.6-2-6.6-2l-16-13.2-19.9-33-18.9 26.3-3.2-12.7-7.1 26.5 26.8 32.7 3 3.8Z'/%3e%3cpath fill='%23fff' stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M73.6 107.5s-5.2-13.5-6.5-16c-1.3-2.5-8.2-13.3-8.5-16.3-.4-2.9-1.5-7.8-2.6-9.8-1-2 2.2-3.4 5-.8 2.7 2.6 4.4 6.8 4.3 8 0 1.2 6.2 5.7 6.2 5.7L72.6 68s1.2-25.8 1-29.7c-.3-3.8-.6-12 2.5-12.3 3-.3 3.5 2 3.5 2s.2-6 3.6-5.6c2.6.3 3.5 2.7 4 4L88 29s2.1-1.5 4.2 2a66.8 66.8 0 0 1 4.7 12s2.9-.1 4.1 3c1.3 3 3.1 10.8 4.9 17.4 1.7 6.5 1.6 12.7 1.6 12.7s.7 21-.7 27.7c-1.4 6.7-4 12.4-4.6 13-.5.5-8.3 23.6-8.3 23.6l-27.2-10s5.7-14 6.6-17c.9-3 .3-5.8.3-5.8Z'/%3e%3cpath stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M68 87.8a8 8 0 0 0 .3 2m2.3-10.3s-1.5 1.8-2.3 5l-.3 1.8M79.6 28l.8 12.5c.3 4.1.5 10.6.5 14.8 0 4.2-.5 9.4-.7 10.6-.3 1.1-1 2.6-1 2.6M88 28.9s-1.4 1.5-1 3.5c.5 2 2.6 13.2 2.6 14.9l.1 16.7c0 1-.6 4.1-1 5.4m8.2-26.5s-1.5.1-1.2 2.5c.4 2.4 1.1 10.2 1.1 12.4 0 2.1.5 7.1.4 11.8 0 4.8 1 6.4 1.5 7.6m-25.4-2.9s-.5 2.7.2 4.1a18 18 0 0 1 1.7 6M78.8 73s-.3 2.2 0 3.7c.3 1.4 1.3 2.9 1.3 2.9m7.9-3.1s-.4 2.4.2 3.9a13 13 0 0 0 1.2 2.6'/%3e%3cpath fill='%236FD5F6' stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='m75.6 199.6 25.2-56.9s-10.7-8.9-17.8-13.5c-7-4.7-15.6-4.6-15.6-4.6l-11.6 25.2c-.6 1.5-8.4 17.5-8.4 17.5s-3.4 1.2-4.9 3.9a2090 2090 0 0 0-13.3 28.4h46.4Z'/%3e%3cpath fill='%234E5969' stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='.4' d='M93.5 146.4a2.4 2.4 0 1 0-2.4-4 2.4 2.4 0 0 0 2.4 4Zm-2.5 7.4a2.4 2.4 0 1 1-4.6-1.1 2.4 2.4 0 0 1 4.6 1.1Z'/%3e%3c/svg%3e")`};
`;
