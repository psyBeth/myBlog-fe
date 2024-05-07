import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { useState } from "react";
import { object, string } from "yup";

export const registerSchema = object({
  username: string()
    .max(10, "Username must be less than 10 characters.")
    .required(),
  first_name: string().max(20, "The name must be less than 20 characters.").required(),
  last_name: string()
    .max(20, "Surname must be less than 30 characters.")
    .required(),

  email: string().email().required(),
  password: string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password must be at most 20 characters.")
    .matches(/\d+/, "Password must contain a number.")
    .matches(/[a-z]/, "Password must contain one lowercase letter.")
    .matches(/[A-Z]/, "Password must contain one uppercase letter.")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain one symbol."),
});

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  const [togglePassword, setTogglePassword] = useState(false);

  const togglePasswordHide = () => {
    setTogglePassword(!togglePassword);
  };
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
            required
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            required
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
          />

          <TextField
            label="Bio"
            name="bio"
            id="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
          />

          <TextField
            required
            name="password"
            label="Password"
            type={togglePassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />

          <Button type="submit" variant="contained" size="large">
            Sign Up
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;