import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import {
  emailValidationRegex,
  passwordValidationRegex,
} from "../../config/additional.config";

type Props = {};

const SignInPage = (props: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="max-w-lg p-10 shadow mx-auto my-40">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-wrapper">
        <h2 className="text-2xl font-semibold mb-5">Login your account</h2>
        <div className="space-y-5">
          <div className="control">
            <TextInput
              type="email"
              label="Email"
              required
              placeholder="Your email"
              register={register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
                pattern: {
                  value: emailValidationRegex,
                  message: "Please enter valid email",
                },
              })}
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="control">
            <TextInput
              type="password"
              label="Password"
              required
              placeholder="Your Password"
              register={register("password", {
                required: {
                  value: true,
                  message: "Please enter your password",
                },
                pattern: {
                  value: passwordValidationRegex,
                  message: "Password should be strong ",
                },
              })}
              errorMessage={errors.password?.message}
            />
          </div>
          <div className="control">
            <button className="px-10 w-full py-4 bg-primary text-white rounded">
              Login
            </button>
          </div>
          <div className="control">
            <p>
              Don't have account?{" "}
              <Link to="/sign-up" className="text-primary underline">
                create
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
