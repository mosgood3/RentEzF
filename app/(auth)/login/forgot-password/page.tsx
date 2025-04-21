// app/page.tsx or pages/index.tsx

import ForgotPassword from "@/components/auth/forgotpassword";
import LoginHeader from "@/components/auth/loginheader";

export default function Home() {
  return (
    <>
      <main>
        <LoginHeader />
        <ForgotPassword />
      </main>
    </>
  );
}
