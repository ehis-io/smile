import { Zap, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import styles from './Features.module.css';

export default function Features() {
    const features = [
        {
            icon: <Zap size={28} />,
            title: "Lightning Fast Approval",
            description: "Apply in minutes and get a decision instantly. We know business opportunities don't wait."
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Secure & Confidential",
            description: "Your data is protected with bank-level encryption. We process thousands of applications safely."
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Business Friendly Rates",
            description: "Competitive interest rates tailored to your business health, not just your personal credit score."
        },
        {
            icon: <Clock size={28} />,
            title: "Flexible Repayment",
            description: "Choose terms that work for your cash flow using our flexible payment schedules."
        }
    ];

    return (
        <section id="features" className={styles.features}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Choose Smile Loans?</h2>
                    <p className={styles.subtitle}>
                        We built our process with the small business owner in mind. Simple, transparent, and fast.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
