import React, { forwardRef, useState } from "react";

import { Stack } from "@mui/material";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";

import { Container, Content, Heading } from "./recent-activity.styles";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import Dropdown from "../UI/dropdown/dropdown.component";
import RecentActivityTable from "../UI/recent-activity-table/recent-activity-table.component";
import { recentActivityData } from "../../constants";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, onClose }) => {
  const [itemFilter, setItemFilter] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(null);
  const dropdownTestOptions = ["success", "pending", "error"];

  const handleItemFilterChange = (event) => setItemFilter(event.target.value);


  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <Container>
        <Stack direction="row" spacing="12px" alignItems="center" marginBottom="30px">
          <IconButton aria-label="back" onClick={onClose}>
            <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
          </IconButton>
          <Heading>Recent Activity</Heading>
        </Stack>

        <Content>
          <Stack direction="row" spacing="10px" alignItems="center">
            <div style={{ width: "300px" }}>
              <CustomizedSearchField
                placeholder="Search by SKU, Title, ASIN"
                value={itemFilter}
                onChange={handleItemFilterChange}
              />
            </div>
            <div style={{ width: "200px" }}>
              <Dropdown
                placeholder="Filter by Status"
                data={dropdownTestOptions}
                setSelectedValue={setSelectedStatus}
              />
            </div>
          </Stack>
          <RecentActivityTable
            data={recentActivityData}
            itemFilter={itemFilter}
            selectedStatus={selectedStatus}
          />
        </Content>
      </Container>
    </Dialog>
  );
};

export default FullScreenDialog;
