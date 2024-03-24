import Header from '@components/CheckoutPagePreview/Navbar/Header/Header';
import Navbar from '@components/CheckoutPagePreview/Navbar/Navbar';
import { ReactNode } from 'react';

interface GeneralLayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className={`min-h-[calc(100vh-155px)]`}>{children}</div>
    </div>
  );
}
