import React from "react";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "../components/common/Controls";
import { authenticate } from "../store/actions/authentication";
import { translate } from "../localization/translator";

export default LoginScreen = () => {
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });
  
  const dispath = useDispatch();
  const [validationErr, setValidationErr] = React.useState(null);
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const handleInputChange = (name, text) => {
    setValidationErr(null);
    let login = loginData;
    login[name] = text;
    setLoginData({ ...loginData });
  };

  const handleAuthenticate = () => {
    const { username, password } = loginData;
    const validationErr = validateInput(username, password);
    if (validationErr) {
      setValidationErr(validationErr);
      return;
    }
    console.log('dispatching')
    dispath(authenticate(username, password));
  };

  const validateInput = (username, password) => {
    let errorMessageKey = null;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (username.length === 0) {
      errorMessageKey = "email_cannot_be_blank";
    } else if (!username.match(emailPattern)) {
      errorMessageKey = "email_must_be_valid";
    } else if (password.length < 8) {
      errorMessageKey = "password_must_be_greather_than_8";
    }
    return errorMessageKey;
  };

  return (
    <Layout>
      <ImageBackground
        source={require("../assets/bg-shapes/half-circle-black.png")}
        style={styles.circleBackground}
      >
        <Image
          style={styles.logo}
          source={require("../assets/logo/logo-vertical-white.png")}
        ></Image>
        <Layout style={styles.yellowDivider}></Layout>
      </ImageBackground>
      <Layout style={styles.container}>
        <Layout style={styles.loginForm}>
          <Input
            onChange={handleInputChange}
            label={translate("username")}
            name="username"
            value={loginData.username}
          ></Input>
          <Input
            onChange={handleInputChange}
            label={translate("password")}
            name="password"
            value={loginData.password}
          ></Input>
          {validationErr && (
            <Text style={styles.errorMessage}>{translate(validationErr)}</Text>
          )}
          <Button onClick={handleAuthenticate} style={styles.button}>
            {translate("login")}
          </Button>
          <Layout
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text appearance="hint">{translate("forgot_password")}</Text>
            <Text appearance="hint">{translate("register_here")}</Text>
          </Layout>
          {error && (
            <Layout style={styles.errorContainer}>
              <Text style={styles.errorMessage}>
                {translate("bad_credentials")}
              </Text>
              <Layout style={styles.closeIcon}>
                <Icon
                  style={{ width: 20, height: 20 }}
                  fill="#E0484C"
                  name="close-outline"
                />
              </Layout>
            </Layout>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  yellowDivider: {
    backgroundColor: "#FED053",
    width: 50,
    height: 5,
    marginTop: 15,
  },
  circleBackground: {
    height: 270,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  logo: {
    width: 140,
    height: 90,
    resizeMode: "contain",
  },
  loginForm: {
    width: "100%",
    padding: 25,
  },
  button: {
    marginTop: 15,
    backgroundColor: "black",
  },
  errorContainer: {
    marginTop: 50,
    width: "80%",
    height: 40,
    borderRadius: 5,
    borderColor: "#E0484C",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
  },
  errorMessage: {
    color: "#E0484C",
    fontSize: 12,
    marginTop: 10,
  },
  closeIcon: {
    width: 15,
    height: 15,
    position: "absolute",
    right: 10,
    justifyContent: "center",
  },
});
