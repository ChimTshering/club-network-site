import { signInRequest } from "@/types/auth_type_model";
import { serialize } from "object-to-formdata";

export const domianURL = "https://seliseapp.club.selise.dev";
// sign_in url

export const SignInUser = async (payload: signInRequest) => {
  const res = await fetch(`${domianURL}/api/v2/iam/users/sign_in`, {
    method: "POST",
    body: serialize({ user: payload }),
  });
  const data = await res.json();
  return data.user;
};
export const profile = async () => {
  const res = await fetch(
    "https://seliseapp.club.selise.dev/api/v2/iam/profile",
    {
      credentials: "include",
    }
  );
  const data = await res.json();
  return data.profile;
};
