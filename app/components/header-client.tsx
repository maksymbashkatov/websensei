'use client';

import { useState } from 'react';
import Header from './header';

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
}