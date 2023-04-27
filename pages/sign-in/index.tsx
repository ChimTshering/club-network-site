import React, { ReactElement, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { ImClubs } from "react-icons/im";
import { NextPageWithLayout } from "../_app";
import Layout from "./layout";
import { signInRequest } from "@/types/auth_type_model";
import { SignInUser } from "../api/auth-api";
import { useDispatch } from "react-redux";
import { SetUser } from "@/redux/features/authSlice";

const SignIn: NextPageWithLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>,key:string) => {
      setData(previous=>({...previous,[key]:e.target.value}))
    },
    []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload:signInRequest = {...data, profile_attributes:{locale:'en'}, remember_me:true, role_id:2}
    const response = await SignInUser(payload);
    if(response.id){
      dispatch(SetUser(response))
      router.push("/");
    }
  };
  return (
    <div className="grid justify-center items-center bg-white p-4 py-6 rounded-xl drop-shadow-xl">
      <form
        className="flex flex-col w-full justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-center m-2 mb-4">
          <ImClubs size={40} />
        </div>
        <h2 className="text-center font-bold text-2xl mb-4">Log In</h2>
        <input
          type="text"
          placeholder="Email"
          className="border-b-2 border-b-gray-200 bg-gray-50 rounded-lg py-2 px-1 active:outline-none my-2"
          value={data.email}
          onChange={(e) => handleChange(e,'email')}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="border-b-2 border-b-gray-200 bg-gray-50 rounded-lg py-2 px-1 active:outline-none my-2"
          value={data.password}
          onChange={(e)=>handleChange(e,'password')}
        />
        <input
          type="submit"
          value="Log In"
          className="w-1/2 self-center m-2 p-2 font-bold rounded-md bg-green-500 text-white drop-shadow-md focus:bg-green-400"
        />
      </form>
    </div>
  );
};
SignIn.getLayout = function getLayout(SignIn: ReactElement) {
  return <Layout>{SignIn}</Layout>;
};
export default SignIn;
