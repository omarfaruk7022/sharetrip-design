import "./globals.css";

export const metadata = {
  title: "ShareTrip",
  description: "ShareTrip",
  icons: {
    icon: "https://i.ibb.co/18SvR0c/share-Trip-favicon-removebg-preview.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
