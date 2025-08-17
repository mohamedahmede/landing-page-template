import * as Yup from "yup";

export const contactSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().trim().required("Name is required"),
  message: Yup.string().trim().min(10, "Please add a bit more").required("Message is required"),
});

export type ContactValues = Yup.InferType<typeof contactSchema>;