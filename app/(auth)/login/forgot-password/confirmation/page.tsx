import ForgotConfirm from "@/components/auth/forgotconfirm";
import LoginHeader from "@/components/auth/loginheader";

export default function Home() {
  return (
    <>
      <main>
        <LoginHeader />
        <ForgotConfirm />
      </main>
    </>
  );
}
