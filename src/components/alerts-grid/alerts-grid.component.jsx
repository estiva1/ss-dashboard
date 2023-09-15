import React, { Fragment, useState } from "react";
import { Grid, Zoom, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import AlertCardPrimary from "../UI/alert-cards/alert-card-primary/alert-card-primary.component";
import AlertCardRegular from "../UI/alert-cards/alert-card-regular/alert-card-regular.component";

import { Description, Header, NoAlertsContainer, NoAlertsImage, Title } from "./alerts-grid.styles";

const AlertsGrid = ({ alertsData }) => {
  const [primaryAlerts, setPrimaryAlerts] = useState(alertsData.filter((alert) => alert.alertType === "primary"));
  const [regularAlerts, setRegularAlerts] = useState(alertsData.filter((alert) => alert.alertType === "regular"));

  const handleDismiss = (alertId, alertType) => {
    if (alertType === "primary") {
      setPrimaryAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.alertId !== alertId));
    } else {
      setRegularAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.alertId !== alertId));
    }
  };

  const renderAlerts = (alerts, alertType) => {
    return alerts.map((alert, index) => (
      <Zoom in={true} timeout={index === 0 ? 500 : 1000} key={alert.alertId}>
        <Grid item xs={alertType === "primary" ? 4.7 : 6}>
          {alertType === "primary" ? (
            <AlertCardPrimary
              alertLabel="Need Review: Alert"
              alertDescription={alert.alertDescription}
              value={alert.value}
              dismiss={() => handleDismiss(alert.alertId, alertType)}
            />
          ) : (
            <AlertCardRegular
              alertLabel={alert.alertLabel}
              alertDescription={alert.alertDescription}
              value={alert.value}
              dismiss={() => handleDismiss(alert.alertId, alertType)}
            />
          )}
        </Grid>
      </Zoom>
    ));
  };

  return (
    <Fragment>
      <Header>Alerts</Header>
      {primaryAlerts.length > 0 || regularAlerts.length > 0 ? (
        <Grid container spacing="20px">
          {renderAlerts(primaryAlerts.slice(0, 1), "primary")}

          <Grid item xs={7.3}>
            <Grid container spacing="20px">
              {renderAlerts(regularAlerts.slice(0, 4), "regular")}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NoAlertsContainer>
              <NoAlertsImage />
              <Stack direction="column" gap="24px">
                <Title>Great Job!</Title>
                <Description>
                  You cleared all your alerts! We will notify you when your decision on alerts is required
                </Description>
              </Stack>
            </NoAlertsContainer>
          </motion.div>
        </AnimatePresence>
      )}
    </Fragment>
  );
};

export default AlertsGrid;
