import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  FilledInput,
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  styled,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import React from "react";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const [usernameRequired, setUsernameRequired] = React.useState(false);
  const [passwordRequired, setPasswordRequired] = React.useState(false);

  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("");
  const [openAlert, setOpenAlert] = React.useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const isEmpty = (val) =>
    val === undefined ||
    val === "" ||
    val === " " ||
    val == null ||
    val.length <= 0
      ? true
      : false;

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleLogIn = () => {
    document.body.classList.add("please-wait");

    if (isEmpty(username)) {
      setUsernameRequired(true);
    } else {
      setUsernameRequired(false);
    }
    if (isEmpty(password)) {
      setPasswordRequired(true);
    } else {
      setPasswordRequired(false);
    }

    if (isEmpty(username) || isEmpty(password)) {
      setMessage("Invalid Sign In details!!");
      setMessageType("Error!");
      handleClickAlert();
      document.body.classList.remove("please-wait");
    } else {
      // AuthenticationService.doLoginAuthentication(username, password).then(
      //   (response) => {
      //     AuthenticationService.registerSuccessfulLogin(
      //       response.data.userName,
      //       response.data.token,
      //     );
      //     AuthenticationService.getUserDetails().then(
      //       (response) => {
      //         if (response.data.status === "FAIL") {
      //           setMessage(response.data.message);
      //           setMessageType("Error!");
      //           handleClickAlert();
      //           document.body.classList.remove("please-wait");
      //         } else {
      //           console.log(response.data.info.email);
      //           console.log(response);
      //           AuthenticationService.setUserDetails(
      //             response.data.info.organization_id,
      //             response.data.info.firstName,
      //             response.data.info.lastName,
      //             response.data.info.role,
      //             response.data.info.id,
      //             response.data.info.email,
      //           );
      //           if (rememberMe && !isEmpty(username)) {
      //             localStorage.setItem("username", username);
      //             localStorage.setItem("rememberMe", rememberMe);
      //           } else {
      //             localStorage.removeItem("username");
      //             localStorage.removeItem("rememberMe");
      //           }
      //           setMessage("Sign In success!");
      //           setMessageType("Success!");
      //           handleClickAlert();
      //           setLoginSuccess(true);
      //           document.body.classList.remove("please-wait");
      //           console.info(
      //             `Username:${AuthenticatedDetails.getAuthUser()}, OrgId:${AuthenticatedDetails.getOrgId()}`,
      //           );
      //         }
      //       },
      //       (error) => {
      //         setMessage(`Unable to get user details! ${error}`);
      //         setMessageType("Error!");
      //         handleClickAlert();
      //         document.body.classList.remove("please-wait");
      //       },
      //     );
      //   },
      //   (error) => {
      //     if (error.response && error.response.data) {
      //       setMessage(`Sign In Failed!: ${error.response.data.message}`);
      //     } else {
      //       setMessage(`Sign In Failed!: Bad Credentials`);
      //     }
      //     setMessageType("Error!");
      //     handleClickAlert();
      //     document.body.classList.remove("please-wait");
      //   },
      // );
    }
  };

  const renderSnackbar = () => {
    return (
      <>
        {loginSuccess ? <div>Login Successful</div> : <div>Login Failed</div>}
      </>
    );
  };

  const renderLogin = () => {
    return (
      <>
        <Container
          component={Box}
          maxWidth="xl"
          position="relative"
          zIndex="101"
        >
          <Box component={Grid} container>
            <Grid>
              <Item>
                <Card>
                  <CardHeader></CardHeader>
                  <CardContent>
                    <FormControl>
                      <FilledInput
                        autoComplete="off"
                        placeholder="Username"
                        inputProps={{
                          value: username,
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        }
                        error={usernameRequired}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          if (isEmpty(e.target.value)) {
                            setUsernameRequired(true);
                          } else {
                            setUsernameRequired(false);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // Handle login logic here
                            e.preventDefault();
                            handleLogIn();
                          }
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FilledInput
                        autoComplete="off"
                        placeholder="Password"
                        type="password"
                        inputProps={{
                          value: password,
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <LockIconc />
                          </InputAdornment>
                        }
                        error={passwordRequired}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (isEmpty(e.target.value)) {
                            setPasswordRequired(true);
                          } else {
                            setPasswordRequired(false);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // Handle login logic here
                            e.preventDefault();
                            handleLogIn();
                          }
                        }}
                      />
                    </FormControl>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Box>
        </Container>
      </>
    );
  };

  const render = () => {
    if (loginSuccess) {
      return <h1>Login Successful</h1>;
    } else {
      return (
        <>
          {renderLogin()}
          {renderSnackbar()}
        </>
      );
    }
  };

  return render();
};

export default Login;
