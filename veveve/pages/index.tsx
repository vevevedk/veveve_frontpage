import { Inter } from "@next/font/google";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Footer />
    </>
  );
}
