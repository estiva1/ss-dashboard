import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { Stack, TableHead, TableRow, Tooltip } from "@mui/material";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import testProductImage from "../../../assets/product-image-for-table-example.png";

import {
  ItemImage,
  LabelText,
  PrimaryText,
  PrimaryTextHighlighted,
  SecondaryText,
  SmallText,
  StyledTableCell,
  StyledTableRow,
} from "./recent-activity-table.styles";
import CustomizedProgressBar from "../progress-bar/progress-bar.component";

const generateHighlightedText = (text, filterValue) => {
  const lowerText = text.toLowerCase();
  const lowerFilterValue = filterValue.toLowerCase();

  if (!lowerText.includes(lowerFilterValue)) {
    return text;
  }

  const startIndex = lowerText.indexOf(lowerFilterValue);
  const endIndex = startIndex + lowerFilterValue.length;

  return (
    <>
      {text.substring(0, startIndex)}
      <span style={{ backgroundColor: "#1565D8", color: "#fff" }}>{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </>
  );
};

const RecentActivityTable = ({ data, itemFilter, selectedStatus }) => {
  const recentActivityItems = data.map(({ id, itemName, sellersSku, sku, changeDate, status, price, changeReason }) => {
    const { date, time } = changeDate || {};
    const { currentPrice, newPrice } = price || {};

    return {
      id,
      itemName,
      sellersSku,
      sku,
      date,
      time,
      status,
      currentPrice,
      newPrice,
      changeReason,
    };
  });

  const filteredData = selectedStatus
    ? recentActivityItems.filter((item) => item.status.toLowerCase() === selectedStatus)
    : recentActivityItems;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const matchingData = filteredData.filter((item) => {
    const itemNameMatch = item.itemName.toLowerCase().includes(itemFilter);
    const skuMatch = item.sku.toLowerCase().includes(itemFilter);
    return itemNameMatch || skuMatch;
  });

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-labelledby="recentActivityTable">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Changed At</StyledTableCell>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="left">SKU</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Change Reason</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchingData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ id, itemName, sellersSku, sku, date, time, status, currentPrice, newPrice, changeReason }) => (
                <StyledTableRow key={`item-${id}`}>
                  <StyledTableCell align="left">
                    <Stack direction="column" spacing="6px">
                      <PrimaryText>{date}</PrimaryText>
                      <SecondaryText>{time}</SecondaryText>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell width="300px">
                    <Stack direction="row" spacing="8px">
                      <ItemImage src={testProductImage} style={{ width: "34px", height: "34px" }} loading="lazy" />
                      <Stack direction="column" gap="8px">
                        <Tooltip title={itemName} placement="top">
                          <PrimaryTextHighlighted clamp>{generateHighlightedText(itemName, itemFilter)}</PrimaryTextHighlighted>
                        </Tooltip>

                        <Stack direction="row">
                          <SmallText style={{ color: "#979797", whiteSpace: "nowrap" }}>Seller's SKU:&nbsp;</SmallText>
                          <Tooltip title={sellersSku} placement="top">
                            <SmallText clamp style={{ color: "#4E5969" }}>
                              {sellersSku}
                            </SmallText>
                          </Tooltip>
                        </Stack>
                      </Stack>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <PrimaryText>{generateHighlightedText(sku, itemFilter)}</PrimaryText>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="6px">
                      <CustomizedProgressBar status={status.toLowerCase()} />
                      <SecondaryText style={{ color: "#979797", textTransform: "capitalize", alignSelf: "center" }}>
                        {status}
                      </SecondaryText>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="column" gap="4px">
                      <Stack direction="row" spacing="10px" alignItems="center">
                        <PrimaryText>${currentPrice}</PrimaryText>
                        <LabelText>current price</LabelText>
                      </Stack>

                      <Stack direction="row" alignItems="center">
                        <SmallText difference={Number(newPrice) - Number(currentPrice)}>
                          {(Number(newPrice) - Number(currentPrice)).toFixed(2)}
                        </SmallText>
                        {Number(newPrice) - Number(currentPrice) > 0 ? (
                          <ArrowDropUpIcon fontSize="1rem" color="success" />
                        ) : Number(newPrice) - Number(currentPrice) < 0 ? (
                          <ArrowDropUpIcon
                            fontSize="1rem"
                            color="error"
                            sx={{
                              transform: "rotate(180deg)",
                            }}
                          />
                        ) : (
                          <ArrowDropUpIcon
                            fontSize="1rem"
                            sx={{
                              transform: "rotate(90deg)",
                            }}
                          />
                        )}
                      </Stack>

                      <Stack direction="row" spacing="10px" alignItems="center">
                        <PrimaryText style={{ color: "#000", fontWeight: 600 }}>${newPrice}</PrimaryText>
                        <LabelText>new price</LabelText>
                      </Stack>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <PrimaryText>{changeReason}</PrimaryText>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <StyledTableRow
                sx={{
                  height: 83 * emptyRows, //the most heightish cell - with prices (5.1875rem)
                }}
              >
                <StyledTableCell colSpan={6} />
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={matchingData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default RecentActivityTable;
