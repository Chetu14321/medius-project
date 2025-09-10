import "./globals.scss";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Better.com Replica",
  description: "Assignment project built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
