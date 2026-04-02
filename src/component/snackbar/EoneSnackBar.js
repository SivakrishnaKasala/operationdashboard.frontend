import { Box, IconButton, Snackbar } from "@mui/material";
import React from "react";

import WarningIcon from "@mui/icons-material/Warning";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
        action={
          <Box
            component={IconButton}
            padding="0!important"
            onClick={() => closeAlert(false)}
          >
            <Box component="span">x</Box>
          </Box>
        }
        message={
          <>
            <Box
              fontSize="1.25rem"
              display="flex"
              marginRight="1.25rem"
              alignItems="center"
            >
              {messageType.startsWith("E") && (
                <Box
                  component={ThumbDownIcon}
                  width="1.25rem!important"
                  height="1.25rem!important"
                />
              )}
              {messageType.startsWith("S") && (
                <Box
                  component={ThumbUpIcon}
                  width="1.25rem!important"
                  height="1.25rem!important"
                />
              )}
              {messageType.startsWith("W") && (
                <Box
                  component={WarningIcon}
                  width="1.25rem!important"
                  height="1.25rem!important"
                />
              )}
            </Box>
            <Box component="span">
              <Box component="strong" marginRight=".5rem">
                {messageType}
              </Box>
              {message}
            </Box>
          </>
        }
      />
    </>
  );
};

export default EoneSnackBar;
