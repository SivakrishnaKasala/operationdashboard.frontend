import { Box, IconButton, Snackbar } from "@mui/material";
import React from "react";

const EoneSnackBar = ({ message, messageType, openAlert, closeAlert }) => {
  // success,warning,error,failure

  let autoHideTime = messageType.toLocaleLowerCase().startsWith("er")
    ? null
    : messageType.toLocaleLowerCase().startsWith("su")
      ? 3000
      : messageType.toLocaleLowerCase().startsWith("wa")
        ? 5000
        : messageType.toLocaleLowerCase().startsWith("in")
          ? 2000
          : null;
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openAlert}
        autoHideDuration={autoHideTime}
        onClose={() => closeAlert(false)}
        message={message}
        action={
          <Box
            component={IconButton}
            padding="0!important"
            onClick={() => closeAlert(false)}
          >
            <Box component="span">x</Box>
          </Box>
        }
      />
    </>
  );
};

export default EoneSnackBar;
