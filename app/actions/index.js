"use server";

import { signIn } from "@/auth";

export const login = async (fromData) => {
  try {
    const response = await signIn("credentials", {
      email: fromData.get("email"),
      password: fromData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
