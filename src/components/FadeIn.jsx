import { motion } from 'framer-motion';

function FadeIn({ children, delay = 0, className, style }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;
