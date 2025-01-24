"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

        <html lang="en">
          <body>
        <TooltipProvider>
              {children}
        </TooltipProvider>
          </body>
        </html>
      </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
