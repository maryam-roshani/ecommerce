import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const LoginSignup: React.FC = () => {
  const [action, setAction] = useState<"Login" | "Sign Up">("Sign Up");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={4} sx={{ p: 4, width: 400, borderRadius: 3 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          {action}
        </Typography>

        <Box component="form" display="flex" flexDirection="column" gap={2}>
          {action === "Sign Up" && (
            <TextField label="Your Name" variant="outlined" fullWidth />
          )}

          <TextField label="Email" type="email" variant="outlined" fullWidth />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />

          {action === "Login" && (
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer", textAlign: "right" }}
            >
              Lost Password? <span style={{ fontWeight: 600 }}>Click Here!</span>
            </Typography>
          )}

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 1, borderRadius: 2 }}
          >
            Continue
          </Button>

          {action === "Sign Up" ? (
            <Typography variant="body2" textAlign="center">
              Already have an account?{" "}
              <span
                style={{ color: "#1976d2", cursor: "pointer" }}
                onClick={() => setAction("Login")}
              >
                Login Here
              </span>
            </Typography>
          ) : (
            <Typography variant="body2" textAlign="center">
              No account?{" "}
              <span
                style={{ color: "#1976d2", cursor: "pointer" }}
                onClick={() => setAction("Sign Up")}
              >
                Click Here!
              </span>
            </Typography>
          )}

          {action === "Sign Up" && (
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  By continuing, I agree to the{" "}
                  <span style={{ fontWeight: 600 }}>Terms of Use</span> &{" "}
                  <span style={{ fontWeight: 600 }}>Privacy Policy</span>.
                </Typography>
              }
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginSignup;
