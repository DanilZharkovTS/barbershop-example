import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crowsnest Barbershop - Book Now",
  description:
    "Finest Quality Barbershop with locations in Santa Cruz de Tenerife, Costa Adeje, Los Cristianos, Puerto de la Cruz, Playa de las Américas & La Laguna.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#052124] text-white antialiased font-rubik selection:bg-[#f2d383] selection:text-[#052124]">
        {children}
      </body>
    </html>
  );
}
