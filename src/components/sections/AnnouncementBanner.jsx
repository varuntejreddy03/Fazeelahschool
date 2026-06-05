import { school } from '../../data/schoolData';

export default function AnnouncementBanner() {
  const text = `ADMISSIONS OPEN FOR ${school.admissions.year} | Call: ${school.phone[0]} | Hostel Facility Available for Boys | 2nd Sunday: Parent Visiting Day`;

  return (
    <div className="overflow-hidden bg-brand-gold py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="mx-8 font-body font-semibold text-brand-navy">{text}</span>
        <span className="mx-8 font-body font-semibold text-brand-navy">{text}</span>
      </div>
    </div>
  );
}
