import Confirmation from "@/components/auth/confirmemail";
import CreateHeader from "@/components/auth/createheader";

export default function Home() {
  return (
    <>
      <main>
        <CreateHeader />
        <Confirmation />
      </main>
    </>
  );
}