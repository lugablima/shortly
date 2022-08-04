import joi from "joi";

const newUserSchema = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().required(),
  password: joi.string().trim().required(),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
});

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().trim().required(),
});

export { newUserSchema, userSchema };
