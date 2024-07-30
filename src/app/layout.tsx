import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Styles
import "@/styles/globals.css";
import "@/styles/index.css";
import "@aws-amplify/ui-react-storage/styles.css";

import Auth from "@/components/auth/Auth";
import NavBar from "@/components/layout/NavBar";
import { isAuthenticated } from "@/utils/amplify-utils";
import SideBar from "@/components/layout/Sidebar/index";

import PanelLayout from "@/components/layout/PanelLayout";
import { cookies } from "next/headers";
import LeftBar from "@/components/layout/LeftBar/index";
import AuthClient from "@/components/auth/AuthClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuciTalk",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let userData = await isAuthenticated();

  // For panel layout, get setting from the storage
  const layout = cookies().get("panel-layout");
  let defaultLayout;
  if (layout) defaultLayout = JSON.parse(layout.value);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app_background">
          <Auth>
            <NavBar />
            {userData ? (
              <main className="app_main">
                <SideBar />
                <div className="app_workspace">
                  <div className="app_workspace--layout">
                    <PanelLayout defaultLayout={defaultLayout}>
                      <LeftBar />
                      {children}
                    </PanelLayout>
                  </div>
                  <div className="app_workspace--banner"></div>
                </div>
              </main>
            ) : (
              <AuthClient />
            )}
          </Auth>
        </div>
      </body>
    </html>
  );
}
