import { motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Bus,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import AnnouncementBanner from '../components/sections/AnnouncementBanner';
import OverviewGrid from '../components/sections/OverviewGrid';
import FacilitiesStrip from '../components/sections/FacilitiesStrip';
import StatBadge from '../components/ui/StatBadge';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';

const learningPillars = [
  {
    title: 'Strong Academics',
    body: 'Daily classroom learning is structured around clear concepts, revision, and steady progress.',
    Icon: BookOpen,
  },
  {
    title: 'Critical Thinking',
    body: 'Students are encouraged to ask questions, solve problems, and connect lessons to real life.',
    Icon: Brain,
  },
  {
    title: 'Values & Character',
    body: 'Discipline, respect, confidence, and responsibility are built into the school culture.',
    Icon: HeartHandshake,
  },
];

const admissionSteps = [
  'Call or WhatsApp the admissions team',
  'Share student details and class requirement',
  'Visit campus and meet the school team',
  'Complete application and seat confirmation',
];

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <AnnouncementBanner />

      <section className="bg-brand-navy py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 lg:grid-cols-4">
          {school.stats.map((stat, index) => (
            <StatBadge key={stat.label} value={stat.value} label={stat.label} isLast={index === school.stats.length - 1} />
          ))}
        </div>
      </section>

      <OverviewGrid />

      <section className="bg-brand-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Learning Approach</p>
              <h2 className="font-display text-4xl text-white md:text-5xl">Education With Values, Every Day</h2>
              <div className="my-5 h-1 w-16 bg-brand-gold" />
              <p className="max-w-xl font-body text-lg leading-relaxed text-white/70">
                Fazeelah School combines academic focus with a warm, disciplined environment where students
                are guided to grow in knowledge, confidence, and character.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {learningPillars.map(({ title, body, Icon }) => (
                <div key={title} className="border border-white/10 bg-white/[0.08] p-6 shadow-brand backdrop-blur-md">
                  <Icon className="mb-5 text-brand-gold" size={30} strokeWidth={1.8} />
                  <h3 className="font-display text-2xl text-white">{title}</h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FacilitiesStrip />

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Campus Life</p>
              <h2 className="font-display text-4xl text-brand-navy md:text-5xl">A School Day Built Around Growth</h2>
              <div className="my-5 h-1 w-16 bg-brand-gold" />
              <p className="font-body text-lg leading-relaxed text-brand-muted">
                Students learn in modern classrooms, participate in activities, and grow within a secure,
                supportive campus environment.
              </p>
            </div>
            <a href="/#/vision">
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:border-brand-gold">
                Explore Vision
              </Button>
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-brand-navy">
              <img
                src="/images/promo-place-to-learn.jpeg"
                alt="Students and school activity at Fazeelah School"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width="1100"
                height="720"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
                <Sparkles className="mb-4 text-brand-gold" size={28} />
                <h3 className="font-display text-3xl">More Than Classroom Learning</h3>
                <p className="mt-3 max-w-xl font-body leading-relaxed text-white/70">
                  Digital classrooms, sports, values, and teacher guidance help students become confident learners.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="border border-brand-blue/10 bg-white p-7 shadow-brand">
                <Trophy className="mb-4 text-brand-gold" size={28} />
                <h3 className="font-display text-2xl text-brand-navy">Sports & Activities</h3>
                <p className="mt-3 font-body leading-relaxed text-brand-muted">
                  A dedicated sports arena supports physical fitness, teamwork, and healthy competition.
                </p>
              </div>
              <div className="border border-brand-blue/10 bg-white p-7 shadow-brand">
                <Users className="mb-4 text-brand-gold" size={28} />
                <h3 className="font-display text-2xl text-brand-navy">Teacher Guidance</h3>
                <p className="mt-3 font-body leading-relaxed text-brand-muted">
                  Certified faculty members give students consistent academic and personal support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex min-h-[440px] flex-col justify-center bg-brand-navy p-8 md:p-16">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Admissions</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">Admissions Open {school.admissions.year}</h2>
          <div className="my-5 h-1 w-16 bg-brand-gold" />
          <p className="max-w-xl font-body leading-relaxed text-white/70">{school.subTagline}</p>
          <p className="mt-4 max-w-xl font-body leading-relaxed text-white/60">
            Speak with our admissions team for seat availability, hostel details, transportation, and the application process.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Message Us on WhatsApp</Button>
            </a>
            <a href="tel:+917075355455">
              <Button variant="outline">Call Admissions</Button>
            </a>
          </div>
        </div>
        <div className="relative min-h-[440px] overflow-hidden bg-brand-gold">
          <img
            src="/images/promo-admissions-dharmavaram.jpeg"
            alt="Admissions announcement for Fazeelah English Medium School"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width="900"
            height="720"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="tel:+917075355455" className="border border-white/20 bg-white/10 p-4 backdrop-blur-md hover:border-brand-gold">
                <Phone className="mb-3 text-brand-gold" size={22} />
                <p className="font-body text-xs uppercase tracking-widest text-white/60">Phone</p>
                <p className="mt-1 font-body font-semibold">{school.phone[0]}</p>
              </a>
              <a href={`mailto:${school.email.admissions}`} className="border border-white/20 bg-white/10 p-4 backdrop-blur-md hover:border-brand-gold">
                <Mail className="mb-3 text-brand-gold" size={22} />
                <p className="font-body text-xs uppercase tracking-widest text-white/60">Email</p>
                <p className="mt-1 break-words font-body font-semibold">{school.email.admissions}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">How To Apply</p>
            <h2 className="font-display text-4xl text-brand-navy md:text-5xl">Simple Admissions Journey</h2>
            <div className="my-5 h-1 w-16 bg-brand-gold" />
            <p className="font-body text-lg leading-relaxed text-brand-muted">
              The admissions team can guide parents through class availability, campus visit timing, and required details.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <div key={step} className="relative border border-brand-light bg-brand-cream p-6">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy font-display text-xl text-brand-gold">
                  {index + 1}
                </span>
                <CheckCircle2 className="absolute right-6 top-6 text-brand-gold" size={22} />
                <p className="font-body font-semibold leading-relaxed text-brand-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Campus Access</p>
            <h2 className="font-display text-4xl text-brand-navy md:text-5xl">Visit Fazeelah School</h2>
            <div className="my-5 h-1 w-16 bg-brand-gold" />
            <p className="max-w-2xl font-body text-lg leading-relaxed text-brand-muted">
              Meet our admissions team, explore the campus, and learn about classrooms, hostel support,
              transportation, and safety facilities.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+917075355455">
                <Button variant="primary">Call to Plan a Visit</Button>
              </a>
              <a href="/#/contact">
                <Button variant="outline" className="border-brand-navy text-brand-navy hover:border-brand-gold">
                  View Contact Details
                </Button>
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-brand-blue/10 bg-white p-6 shadow-brand">
              <MapPin className="mb-4 text-brand-gold" size={26} />
              <h3 className="font-display text-2xl text-brand-navy">Location</h3>
              <p className="mt-3 font-body leading-relaxed text-brand-muted">{school.address}</p>
            </div>
            <div className="border border-brand-blue/10 bg-white p-6 shadow-brand">
              <Clock className="mb-4 text-brand-gold" size={26} />
              <h3 className="font-display text-2xl text-brand-navy">School Hours</h3>
              <p className="mt-3 font-body text-brand-muted">Mon-Sat: {school.hours.weekdays}</p>
              <p className="mt-2 font-body text-brand-muted">Sunday: {school.hours.sunday}</p>
            </div>
            <div className="border border-brand-blue/10 bg-white p-6 shadow-brand">
              <Bus className="mb-4 text-brand-gold" size={26} />
              <h3 className="font-display text-2xl text-brand-navy">Transport</h3>
              <p className="mt-3 font-body leading-relaxed text-brand-muted">
                Bus transportation is available for students across nearby routes.
              </p>
            </div>
            <div className="border border-brand-blue/10 bg-white p-6 shadow-brand">
              <ShieldCheck className="mb-4 text-brand-gold" size={26} />
              <h3 className="font-display text-2xl text-brand-navy">Safety</h3>
              <p className="mt-3 font-body leading-relaxed text-brand-muted">
                The campus is supported by CCTV surveillance and structured student care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
