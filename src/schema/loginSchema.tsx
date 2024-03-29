import * as Yup from "yup";

export const loginSchema = Yup.object({
  phone: Yup.string()
    .required("A phone number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid Number"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
