import React, { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { UserLogin, UserSignUp } from "../../Api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_USER_DATA } from "../../Redux/userDetails";

const LoginSchema = yup.object().shape({
  email: yup.string().required("* Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("* Password is required")
    .min(6, "Password too short"),
});

const SignupSchema = yup.object().shape({
  signFullname: yup.string().required("* Fullname is required"),
  signEmail: yup
    .string()
    .required("* Email is required")
    .email("Invalid email"),
  signPassword: yup
    .string()
    .required("* Password is required")
    .min(6, "Password too short"),
});

const Login = () => {
  const [navigateSignup, setNavigateSignup] = useState(false);
  const modalRef = useRef();
  const dispatch = useDispatch();

  // Login form setup
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    reset: resetLogin,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // Signup form setup
  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    reset: resetSignup,
    formState: { errors: signupErrors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const handleLogin = async (data) => {
    if (data) {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const response = await UserLogin(userData);
        if (response && response.status === 200) {
          console.log(response.data, "login=========>");
          toast.success(response.data.message);
          modalRef.current.close();
          dispatch(SET_USER_DATA(response.data.user));
          resetLogin();
        } else {
          console.log("Error in fetching login details");
        }
      } catch (error) {
        console.log("Error:", error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  };

  const handleSignup = async (data) => {
    if (data) {
      try {
        const payload = {
          fullname: data.signFullname,
          email: data.signEmail,
          password: data.signPassword,
        };
        const response = await UserSignUp(payload);
        if (response && response.status === 201) {
          console.log(response.data, "signup=========>");
          toast.success(response.data.message);
          setNavigateSignup(false);
          resetSignup();
        } else {
          console.log("Error in fetching signup details");
        }
      } catch (error) {
        console.log("Error:", error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-black border-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-black-500">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-pink-500 text-center">
            {navigateSignup ? "Sign Up" : "Sign In"}
          </h3>
          <br />

          {!navigateSignup && (
            <form onSubmit={handleLoginSubmit(handleLogin)}>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col gap-2">
                  <h4>Email</h4>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-[24rem] h-[3.5rem] border border-black pl-5 outline-none rounded-md dark:text-black"
                    {...registerLogin("email")}
                  />
                  {loginErrors?.email && (
                    <span className="text-red-500">
                      {loginErrors?.email?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Password</h4>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-[24rem] h-[3.5rem] border border-black pl-5 outline-none rounded-md dark:text-black"
                    {...registerLogin("password")}
                  />
                  {loginErrors?.password && (
                    <span className="text-red-500">
                      {loginErrors?.password?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between h-[6rem]">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white w-[24rem] h-[3rem] rounded-md"
                  >
                    LOGIN
                  </button>
                  <div className="flex justify-between cursor-pointer">
                    <h3
                      className="text-blue-500"
                      onClick={() => setNavigateSignup(true)}
                    >
                      Create an account?
                    </h3>
                    <h3 className="text-blue-500">Forgot Password?</h3>
                  </div>
                </div>
              </div>
            </form>
          )}

          {navigateSignup && (
            <form onSubmit={handleSignupSubmit(handleSignup)}>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col gap-2">
                  <h4>Full Name</h4>
                  <input
                    type="name"
                    placeholder="Enter your fullname"
                    className="w-[24rem] h-[3.5rem] border border-black pl-5 outline-none rounded-md dark:text-black"
                    {...registerSignup("signFullname")}
                  />
                  {signupErrors?.signFullname && (
                    <span className="text-red-500">
                      {signupErrors?.signFullname?.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h4>Email</h4>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    className="w-[24rem] h-[3.5rem] border border-black pl-5 outline-none rounded-md dark:text-black"
                    {...registerSignup("signEmail")}
                  />
                  {signupErrors?.signEmail && (
                    <span className="text-red-500">
                      {signupErrors?.signEmail?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Password</h4>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-[24rem] h-[3.5rem] border border-black pl-5 outline-none rounded-md dark:text-black"
                    {...registerSignup("signPassword")}
                  />
                  {signupErrors?.signPassword && (
                    <span className="text-red-500">
                      {signupErrors?.signPassword?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between h-[6rem]">
                  <button className="bg-pink-500 text-white w-[24rem] h-[3rem] rounded-md">
                    SIGN UP
                  </button>
                  <div className="flex justify-center cursor-pointer">
                    <h3
                      className="text-blue-500"
                      onClick={() => setNavigateSignup(false)}
                    >
                      Already have an account?
                    </h3>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Login;
