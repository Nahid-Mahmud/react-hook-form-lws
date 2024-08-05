import React from "react";
import FieldSet from "./FieldSet";
import Field from "./Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = {
      email: "example@gmail.com",
      password: "12345678",
    };

    const found = formData.email === user?.email && formData?.password === user?.password;
    if (!found) {
      setError("root.random", {
        message: `User with email '${formData?.email}' is not found`,
        type: "random",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label={"Enter Login Details"}>
          <Field error={errors?.email} label={"Email"}>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email address"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors?.email ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>

          <Field error={errors?.password} label={"Password"}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be 8 charecter",
                },
              })}
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors?.password ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>
        {/* error */}
        <div>{errors?.root?.random?.message}</div>

        <Field>
          <button type="submit" className="text-md text-white cursor-pointer p-1 border rounded-lg  bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
