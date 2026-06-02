import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp } from '../../hooks/useScrollReveal';

export default function NewsletterSection() {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Newsletter signup:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-xl mx-auto px-4 text-center">
        <SectionHeading eyebrow="Newsletter" title="Stay Updated" subtitle="Get the latest news and updates from Fazeelah School" />
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-brand-muted/30 font-body focus:outline-none focus:border-brand-gold"
          />
          <button type="submit" className="px-6 py-3 bg-brand-gold text-brand-navy font-body font-semibold rounded-full hover:bg-yellow-500 transition-colors">
            Sign Up
          </button>
        </motion.form>
        {submitted && (
          <p className="mt-4 text-green-600 font-body font-medium">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
}
