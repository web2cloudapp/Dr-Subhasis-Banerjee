'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="header-container">
        <h1 className="site-title">
          <Link href="/">Dr. Subhasis Banerjee</Link>
        </h1>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link
                href="/"
                className={pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className={pathname === '/research' ? 'active' : ''}
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className={pathname === '/publications' ? 'active' : ''}
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href="/cv"
                className={pathname === '/cv' ? 'active' : ''}
              >
                Curriculum Vitae
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/phd-supervision"
                className={pathname === '/phd-supervision' ? 'active' : ''}
              >
                PhD Supervision
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
