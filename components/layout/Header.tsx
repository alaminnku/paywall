import MobileNav from './MobileNav';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
