import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            {/* <LeftSidebar /> */}
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            {/* <RightSidebar /> */}
            rightsidebar
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
