import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const reviews = [
        {
            initials: "JD",
            name: "John Davis",
            role: "Owner, Davis Auto Repair",
            quote: "Smile Loans saved my business during a crunch. The approval was instant and the funds were in my account the next morning."
        },
        {
            initials: "SK",
            name: "Sarah Kim",
            role: "Founder, Green Leaf Cafe",
            quote: "Finally a lender that understands small business. No hoops to jump through, just a simple process and great rates."
        },
        {
            initials: "MR",
            name: "Mike Rodriguez",
            role: "CEO, TechFlow Solutions",
            quote: "We needed capital for expansion and Smile Loans delivered. The dashboard is easy to use and their support team is top notch."
        }
    ];

    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Happy Business Owners</h2>
                </div>

                <div className={styles.grid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="var(--primary-yellow)" />
                                ))}
                            </div>
                            <p className={styles.quote}>"{review.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{review.initials}</div>
                                <div className={styles.authorInfo}>
                                    <h4>{review.name}</h4>
                                    <p>{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
