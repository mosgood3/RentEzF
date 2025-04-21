// app/page.tsx or pages/index.tsx

import Login from "../../../components/auth/login";
import LoginHeader from "../../../components/auth/loginheader";

export default function Home() {
  return (
    <>
      <main>
        <LoginHeader />
        <Login />
      </main>
    </>
  );
}
