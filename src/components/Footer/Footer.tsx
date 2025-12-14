import Link from 'next/link';
import { Smile } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>
                            <Smile size={24} color="var(--primary-yellow)" />
                            Smile<span>Loans</span>
                        </h3>
                        <p className={styles.description}>
                            Empowering small businesses with the capital they need to grow. Transparent, fast, and secure financing.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Products</h4>
                            <ul>
                                <li><Link href="#">Small Business Loan</Link></li>
                                <li><Link href="#">Equipment Financing</Link></li>
                                <li><Link href="#">Line of Credit</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Careers</Link></li>
                                <li><Link href="#">Press</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Support</h4>
                            <ul>
                                <li><Link href="#">Help Center</Link></li>
                                <li><Link href="#">Contact Us</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Smile Loans Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
