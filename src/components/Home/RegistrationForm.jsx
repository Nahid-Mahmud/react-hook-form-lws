import React from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import FieldSet from "./FieldSet";
import Field from "./Field";
import NumberInput from "../NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(submitForm)}>
          {/* basic detials */}
          <FieldSet label={"Enter Your Basic Details"}>
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

            <Field error={errors?.fname} label={"Full Name"}>
              <input
                {...register("fname", {
                  required: "Full Name is required",
                })}
                id="fname"
                type="text"
                name="fname"
                placeholder="Enter Full Name"
                className={`p-2 border box-border w-[300px] rounded-md ${
                  errors?.fname ? "border-red-500" : "border-gray-200"
                }`}
              />
            </Field>

            {/* field for picture /file upload */}
            <Field error={errors?.picture} label={"Picture"}>
              <input
                {...register("picture", {
                  required: "Picture is required",
                })}
                id="picture"
                type="file"
                name="picture"
                placeholder="Enter Full Name"
                className={`p-2 border box-border w-[300px] rounded-md ${
                  errors?.picture ? "border-red-500" : "border-gray-200"
                }`}
              />
            </Field>

            {/* age field */}
            <Field error={errors?.age} label={"Age"}>
              <Controller
                name="age"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <NumberInput
                    id="age"
                    placeholder="Enter Age"
                    className={`p-2 border box-border w-[300px] rounded-md ${
                      !!errors?.age ? "border-red-500" : "border-gray-200"
                    }`}
                    {...field}
                  />
                )}
                rules={{
                  min: { value: 18, message: "You must be 18 years old" },
                  max: { value: 100, message: "You must be 100 years old" },
                }}
              />
            </Field>
          </FieldSet>
          {/* error */}
          <div>{errors?.root?.random?.message}</div>

          {/* socials */}
          <FieldSet label={"Enter Your Socials"}>
            {fields?.map((field, index) => {
              return (
                <div key={field?.id} className="flex justify-between items-center w-max">
                  <Field label={"Social Name"}>
                    <input
                      className="p-2 border box-border w-full rounded-md"
                      type="text"
                      {...register(`socials[${index}].name`)}
                      name={`socials[${index}].name`}
                      id={`socials[${index}].name`}
                    />
                  </Field>

                  <Field label={"Social Url"}>
                    <input
                      className="p-2 border box-border w-full rounded-md"
                      type="text"
                      {...register(`socials[${index}].url`)}
                      name={`socials[${index}].url`}
                      id={`socials[${index}].url`}
                    />
                  </Field>

                  <button className="mt-8 mr-2 text-2xl" onClick={() => remove(index)}>
                    &#8722;
                  </button>
                </div>
              );
            })}

            <button
              className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 px-3 py-1 m-auto"
              onClick={(e) => {
                e.preventDefault();
                append({
                  name: "",
                  link: "",
                });
              }}
            >
              Add a social Handle
            </button>
          </FieldSet>

          <Field>
            <button
              type="submit"
              className="text-md text-white cursor-pointer p-1 border rounded-lg  bg-purple-500 m-auto"
            >
              Register
            </button>
          </Field>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
