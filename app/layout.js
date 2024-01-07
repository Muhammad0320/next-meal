import MainNav from "@/components/MainNav/MainNav";
import "./globals.css";
import MainHeaderBackground from "@/components/MainNav/MainHeaderBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainNav />
        {children}
      </body>
    </html>
  );
}




