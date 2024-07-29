import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign up</h4>
        <RegistrationForm />
        <div className="text-center text-xs text-gray-500">
          <Link href={"/login"}>Login</Link> or Signup with
        </div>
        <SocialLogins />
      </div>
    </section>
  );
};

export default RegisterPage;
