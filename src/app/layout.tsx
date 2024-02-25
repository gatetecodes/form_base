import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import FormDesignerContextProvider from "@/context/FormDesignerContext";

const cyne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormBase",
  description: "Drag and Drop Form Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(cyne.className, "bg-background")}>
          <FormDesignerContextProvider>
            {children}
            <Toaster />
          </FormDesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
