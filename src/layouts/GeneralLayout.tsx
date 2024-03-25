import Navbar from '@components/CheckoutPagePreview/Navbar/Navbar';
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
interface GeneralLayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div className="flex flex-col w-full" style={{ height: '100vh' }}>
      <Navbar />
      <div style={{ flexGrow: 1, paddingTop: '40px', backgroundColor: '#f6f8fb' }}>{children}</div>
    </div>
  );
}
