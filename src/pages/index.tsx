import { Inter } from "next/font/google";
import CheckoutPagePreview from "@components/CheckoutPagePreview/CheckoutPagePreview";
import GeneralLayout from "@layouts/GeneralLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <GeneralLayout>
      <CheckoutPagePreview/>
    </GeneralLayout>
  );
}
