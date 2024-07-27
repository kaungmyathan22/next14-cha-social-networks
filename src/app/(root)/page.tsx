import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      amigos
      <UserButton signInUrl="/sign-in" />
    </main>
  );
}
