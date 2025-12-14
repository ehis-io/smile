import Link from 'next/link';
import { Smile } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Smile size={32} color="var(--primary-yellow)" strokeWidth={2.5} />
                    Smile<span>Loans</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#features" className={styles.navLink}>How it Works</Link>
                    <Link href="#testimonials" className={styles.navLink}>Success Stories</Link>
                    <Link href="#about" className={styles.navLink}>About Us</Link>
                    <Link href="#apply" className={styles.ctaButton}>Get Approved</Link>
                </nav>
            </div>
        </header>
    );
}
