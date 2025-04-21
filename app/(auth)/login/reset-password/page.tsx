// app/page.tsx or pages/index.tsx

import ResetPassword from "@/components/auth/resetpassword";
import LoginHeader from "@/components/auth/loginheader";

export default function Home() {
  return (
    <>
      <main>
        <LoginHeader />
        <ResetPassword />
      </main>
    </>
  );
}
