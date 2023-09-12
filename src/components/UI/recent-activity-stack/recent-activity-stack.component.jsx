import React, { Fragment } from "react";

import { Grid, Stack, Tooltip } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FlakyOutlinedIcon from "@mui/icons-material/FlakyOutlined";
import testProductImage from "../../../assets/product-image-for-table-example.png";

import {
  CardName,
  ItemImage,
  PrimaryText,
  PrimaryTextHighlighted,
  RecentActivityStackBody,
  RecentItemContainer,
  SecondaryText,
} from "./recent-activity-stack.styles";
import DashboardButton from "../dashboard-button/dashboard-button.component";

const RecentActivityStack = ({ data, setOpen }) => {
  return (
    <RecentActivityStackBody>
      <Stack direction="column" gap="24px">
        <CardName>Recent Activity</CardName>

        <Stack direction="column" spacing="16px">
          {data.map((item, index) => (
            <RecentItemContainer key={`item-${index}`}>
              <Grid container spacing="20px">
                <Grid item xs={8}>
                  <Stack direction="row" spacing="8px">
                    <ItemImage src={testProductImage} style={{ width: "34px", height: "34px" }} loading="lazy" />
                    <Stack direction="column" gap="8px" overflow="hidden">
                      <Tooltip title={item.itemName} placement="top">
                        <PrimaryTextHighlighted noWrap>{item.itemName}</PrimaryTextHighlighted>
                      </Tooltip>

                      <Tooltip title={item.sku} placement="top">
                        <SecondaryText noWrap sx={{ color: "#979797" }}>
                          Seller's SKU:&nbsp;<SecondaryText sx={{ color: "#4E5969" }}>{item.sku}</SecondaryText>
                        </SecondaryText>
                      </Tooltip>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid item xs={4}>
                  <Stack direction="column" spacing="4px" alignItems="flex-end">
                    <PrimaryText>${item.price}</PrimaryText>

                    <Stack direction="row" alignItems="center">
                      <SecondaryText difference={item.difference}>{Number(item.difference).toFixed(2)}</SecondaryText>
                      {item.difference > 0 ? (
                        <ArrowDropUpIcon fontSize="1rem" color="success" />
                      ) : item.difference < 0 ? (
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
