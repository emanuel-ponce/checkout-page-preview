import Navbar from '@components/CheckoutPagePreview/Navbar/Navbar';
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
interface GeneralLayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="flex-grow pt-[40px] bg-gray-200 tablet-m:bg-white">{children}</div>
    </div>
  );
}
