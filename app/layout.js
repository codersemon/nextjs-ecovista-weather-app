// dependencies
import "./globals.css";

// meta data
export const metadata = {
  title: "Ecovista NextJS Weather APP | Learn With Sumit",
  description: "Developer by Emon Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
