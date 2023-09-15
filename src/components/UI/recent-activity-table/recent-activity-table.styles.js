import styled, { css } from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: "none",
  borderRadius: "4px",
  boxShadow: "none",
  maxHeight: "450px",
  "&::-webkit-scrollbar": {
    width: " 0.4em",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundCcolor: "transparent",
    " &:hover": {
      backgroundColor: "hsl(0, 0%, 81.2%)",
    },
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "hsl(0, 0%, 81.2%)",
  },
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    color: "#979797",
    borderBottom: "1px solid #000",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0.00375rem",
    height: "32px",
    padding: "10px 20px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Titillium Web",
    padding: "12px 20px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  ":hover": {
    backgroundColor: "#F8FAFB",
  },
}));

const applyClampStyles = (props) => {
  if (props.clamp) {
    return css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    `;
  }
  return "";
};

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  ${applyClampStyles}
`;

export const SecondaryText = styled(PrimaryText)`
  font-size: 0.75rem;
  line-height: 0.75rem;
  ${applyClampStyles}
`;

export const LabelText = styled.h4`
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  margin: 0;
`;

export const SmallText = styled.h4`
  color: ${({ difference }) => (difference > 0 ? "#009C34" : difference < 0 ? "#CF0909" : "#4e5969")};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.625rem;
  margin: 0;

  ${applyClampStyles}
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;
