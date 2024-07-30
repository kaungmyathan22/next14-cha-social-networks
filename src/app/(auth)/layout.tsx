import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import "../globals.css";
export const metadata = {
  title: "Cha Social",
  description: "A Next.js Meta Cha Social Application",
};

const inter = Inter({ subsets: ["latin"] });

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-dark-1 h-screen w-full flex items-center justify-center`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default AuthLayout;
