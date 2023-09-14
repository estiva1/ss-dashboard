import React, { Fragment, useState } from "react";
import { Grid, Stack, Zoom } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import AlertCardPrimary from "../UI/alert-cards/alert-card-primary/alert-card-primary.component";
import AlertCardRegular from "../UI/alert-cards/alert-card-regular/alert-card-regular.component";
import { Description, Header, NoAlertsContainer, NoAlertsImage, Title } from "./alerts-grid.styles";

const AlertsGrid = ({ alertsData }) => {
  const [primaryAlerts, setPrimaryAlerts] = useState(alertsData.filter((alert) => alert.alertType === "primary"));
  const [regularAlerts, setRegularAlerts] = useState(alertsData.filter((alert) => alert.alertType === "regular"));

  const handleDismiss = (alertId, alertType) => {
    if (alertType === "primary") {
      const updatedPrimaryAlerts = primaryAlerts.filter((alert) => alert.alertId !== alertId);
      setPrimaryAlerts(updatedPrimaryAlerts);
    } else {
      const updatedRegularAlerts = regularAlerts.filter((alert) => alert.alertId !== alertId);
      setRegularAlerts(updatedRegularAlerts);
    }
  };

  return (
    <Fragment>
      <Header>Alerts</Header>
      {primaryAlerts.length > 0 && regularAlerts.length > 0 && (
        <Grid container spacing="20px">
          {primaryAlerts.slice(0, 1).map((alert) => (
            <Zoom in={true}>
              <Grid item xs={4.7}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={alert.alertId}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AlertCardPrimary
                      //key={alert.alertId}
                      alertLabel="Need Review: Alert"
                      alertDescription={alert.alertDescription}
                      value={alert.value}
                      alertId={alert.alertId}
                      dismiss={() => handleDismiss(alert.alertId, "primary")}
                    />
                  </motion.div>
                </AnimatePresence>
              </Grid>
            </Zoom>
          ))}

          <Grid item xs={7.3}>
            <Grid container spacing="20px">
              {regularAlerts.slice(0, 4).map((alert, index) => (
                <Zoom in={true} timeout={index === 0 ? 500 : 1000}>
                  <Grid item xs={6}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={alert.alertId}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AlertCardRegular
                          alertLabel={alert.alertLabel}
                          alertDescription={alert.alertDescription}
                          value={alert.value}
                          alertId={alert.alertId}
                          dismiss={() => handleDismiss(alert.alertId, "regular")}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </Grid>
                </Zoom>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}

      {primaryAlerts.length > 0 && regularAlerts.length === 0 && (
        <Grid container spacing="20px">
          {primaryAlerts.slice(0, 1).map((alert) => (
            <Zoom in={true}>
              <Grid item xs={4.7}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={alert.alertId}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AlertCardPrimary
                      alertLabel="Need Review: Alert"
                      alertDescription={alert.alertDescription}
                      value={alert.value}
                      alertId={alert.alertId}
                      dismiss={() => handleDismiss(alert.alertId, "primary")}
                    />
                  </motion.div>
                </AnimatePresence>
              </Grid>
            </Zoom>
          ))}
        </Grid>
      )}

      {primaryAlerts.length === 0 && regularAlerts.length > 0 && (
        <Grid container spacing="20px">
          <Grid item xs={7.3}>
            <Grid container spacing="20px">
              {regularAlerts.slice(0, 4).map((alert, index) => (
                <Zoom in={true} timeout={index === 0 ? 500 : 1000}>
                  <Grid item xs={6}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={alert.alertId}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AlertCardRegular
                          alertLabel={alert.alertLabel}
                          alertDescription={alert.alertDescription}
                          value={alert.value}
                          alertId={alert.alertId}
                          dismiss={() => handleDismiss(alert.alertId, "regular")}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </Grid>
                </Zoom>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}

      {primaryAlerts.length === 0 && regularAlerts.length === 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NoAlertsContainer>
              <div>
                <NoAlertsImage />
              </div>
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
