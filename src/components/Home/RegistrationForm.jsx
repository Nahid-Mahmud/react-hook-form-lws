import { useFieldArray, useForm } from "react-hook-form";
import FieldSet from "./FieldSet";
import Field from "./Field";


const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <form onSubmit={handleSubmit(submitForm)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
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
              className={`p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400 ${
                errors?.email ? "border-red-500" : "border-gray-300"
              }`}
            />
          </Field>

          <Field error={errors?.password} label={"Password"}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be 8 characters",
                },
              })}
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              className={`p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400 ${
                errors?.password ? "border-red-500" : "border-gray-300"
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
              className={`p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400 ${
                errors?.fname ? "border-red-500" : "border-gray-300"
              }`}
            />
          </Field>

          <Field error={errors?.picture} label={"Picture"}>
            <input
              {...register("picture", {
                required: "Picture is required",
              })}
              id="picture"
              type="file"
              name="picture"
              className={`p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400 ${
                errors?.picture ? "border-red-500" : "border-gray-300"
              }`}
            />
          </Field>

          {/* <Field error={errors?.age} label={"Age"}>
            <Controller
              name="age"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  placeholder="Enter Age"
                  className={`p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400 ${
                    !!errors?.age ? "border-red-500" : "border-gray-300"
                  }`}
                  {...field}
                />
              )}
              rules={{
                min: { value: 18, message: "You must be at least 18 years old" },
                max: { value: 100, message: "You must be 100 years old or younger" },
              }}
            />
          </Field> */}
        </FieldSet>

        <div className="text-red-500 text-sm mt-2">{errors?.root?.random?.message}</div>

        <FieldSet label={"Enter Your Socials"}>
          {fields?.map((field, index) => (
            <div key={field?.id} className="flex justify-between items-center w-full mb-4 space-x-2">
              <Field label={"Social Name"}>
                <input
                  className="p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400"
                  type="text"
                  {...register(`socials[${index}].name`)}
                  name={`socials[${index}].name`}
                  id={`socials[${index}].name`}
                />
              </Field>

              <Field label={"Social URL"}>
                <input
                  className="p-3 border w-full rounded-md focus:ring-2 focus:ring-purple-400"
                  type="text"
                  {...register(`socials[${index}].url`)}
                  name={`socials[${index}].url`}
                  id={`socials[${index}].url`}
                />
              </Field>

              <button
                type="button"
                className="mt-8 mr-2 text-2xl text-red-500 hover:text-red-700"
                onClick={() => remove(index)}
              >
                &#8722;
              </button>
            </div>
          ))}

          <button
            type="button"
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-blue-500 hover:bg-blue-700 px-4 py-2 m-auto"
            onClick={(e) => {
              e.preventDefault();
              append({
                name: "",
                link: "",
              });
            }}
          >
            Add Social Handle
          </button>
        </FieldSet>

        <Field>
          <button
            type="submit"
            className="text-md text-white font-bold cursor-pointer p-3 border rounded-lg bg-purple-500 hover:bg-purple-700 w-fit mx-auto mt-6"
          >
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
