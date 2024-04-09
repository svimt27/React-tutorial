import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
// type FormValues = {
//   username: string,
//   channel: string,
//   password: number,
// };
export const YouTubeForm = () => {
  const form = useForm({
    defaultValues: {
      username: "Shivam",
      email: "shivam11@gmail.com",
      password: 1234,
      channel: "alwaysexpert",
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  console.log(errors, "error");
  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="">
          <label htmlFor="exampleInputUserName" className="">
            Username
          </label>
          <input
            type="text"
            className=""
            id="username"
            aria-describedby="emailHelp"
            {...register("username", { required: "UserName is required" })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="">
          <label htmlFor="exampleInputEmail1" className="">
            Email
          </label>
          <input
            type="email"
            className=""
            id="email"
            aria-describedby="emailHelp"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invaild format",
              },
              required: "Email is required",
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="">
            Password
          </label>
          <input
            type="password"
            className=""
            id="password"
            {...register("password", {
              required: "Password is required",
              maxLength: 8,
              minLength: 4,
              // message: "min is 4 or max 8 digits required",
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputChannel" className="">
            Channel
          </label>
          <input
            type="text"
            className=""
            id="channel"
            {...register("channel", { required: "Channel name is required" })}
          />
          <p className="error">{errors.channel?.message} </p>
        </div>
        <button type="submit" className="">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
