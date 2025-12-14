import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.label}>
                    🚀 Fast funding for small businesses
                </div>

                <h1 className={styles.headline}>
                    Fuel Your Business Dreams with <span>Smile Loans</span>
                </h1>

                <p className={styles.subheadline}>
                    Access flexible capital up to $500k in as little as 24 hours.
                    No hidden fees, just straightforward growth for your business.
                </p>

                <div className={styles.ctaGroup}>
                    <Link href="#apply" className={styles.primaryCta}>
                        Get Approved Now <ArrowRight size={20} />
                    </Link>
                    <Link href="#calculator" className={styles.secondaryCta}>
                        Loan Calculator
                    </Link>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>&#x20A6; 50M+</span>
                        <span className={styles.statLabel}>Funded</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>24h</span>
                        <span className={styles.statLabel}>Approval Time</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>5k+</span>
                        <span className={styles.statLabel}>Happy Businesses</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
