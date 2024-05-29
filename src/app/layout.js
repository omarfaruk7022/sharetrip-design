import "./globals.css";

export const metadata = {
  title: "hareTrip: Book Air Tickets, Hotels, Packages Online",
  description:
    "Leading online travel agency. Book air tickets, hotels, tour packages &amp; more without any hassle at the most affordable rates with ShareTrip.",
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
