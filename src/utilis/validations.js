import * as Yup from "yup";

// ========= Sign In =========
const signInValidationSchema = Yup.object().shape({
   phone_number: Yup.string().required("Phone number is required"),
   password: Yup.string()
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
         "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
});
// ========= Sign Up =========
const signUpValidationSchema = Yup.object().shape({
   first_name: Yup.string().required("First Name is required"),
   last_name: Yup.string().required("Last Name is required"),
   phone_number: Yup.string().required("Phone number is required"),
   email: Yup.string().email("Email is required").required("Email is required"),
   password: Yup.string().required("Password is required"),
});
// ========= Teacher Modal =========
const teacherValidationSchema = Yup.object().shape({
   course: Yup.string().required("Course is required"),
   teacher: Yup.string().required("Teacher Name is required"),
});

// ========= Student Modal =========

// ========= Group Modal =========

// ========= Course Modal =========
export {
   signInValidationSchema,
   teacherValidationSchema,
   signUpValidationSchema,
};
