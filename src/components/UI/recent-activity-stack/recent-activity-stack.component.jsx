import React from "react";

import { Grid, Stack, Tooltip } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DashboardButton from "../dashboard-button/dashboard-button.component";
import testProductImage from "../../../assets/product-image-for-table-example.png";

import {
  CardName,
  ItemImage,
  PrimaryText,
  PrimaryTextHighlighted,
  RecentActivityStackBody,
  RecentItemContainer,
  SmallText,
} from "./recent-activity-stack.styles";

const RecentActivityStack = ({ data, setOpen }) => {
  const recentActivityItems = data
    .map(({ id, itemName, sellersSku, sku, changeDate, status, price, changeReason }) => {
      const { date, time } = changeDate;
      const { currentPrice, newPrice } = price;

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
    })
    .slice(0, 5);

  return (
    <RecentActivityStackBody>
      <Stack direction="column" gap="24px">
        <CardName>Recent Activity</CardName>

        <Stack direction="column" spacing="16px">
          {recentActivityItems.map(({ id, itemName, sellersSku, currentPrice, newPrice }) => (
            <RecentItemContainer key={`item-${id}`}>
              <Grid container spacing="20px">
                <Grid item xs={8}>
                  <Stack direction="row" spacing="8px">
                    <ItemImage src={testProductImage} style={{ width: "34px", height: "34px" }} loading="lazy" />
                    <Stack direction="column" gap="8px">
                      <Tooltip title={itemName} placement="top">
                        <PrimaryTextHighlighted clamp>{itemName}</PrimaryTextHighlighted>
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
                </Grid>

                <Grid item xs={4}>
                  <Stack direction="column" spacing="4px" alignItems="flex-end">
                    <PrimaryText>${currentPrice}</PrimaryText>
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
                  </Stack>
                </Grid>
              </Grid>
            </RecentItemContainer>
          ))}
        </Stack>
      </Stack>

      <DashboardButton buttonText="See all" onClick={setOpen} />
    </RecentActivityStackBody>
  );
};

export default RecentActivityStack;
