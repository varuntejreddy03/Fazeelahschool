import { school } from '../../data/schoolData';

export default function AnnouncementBanner() {
  const text = `🎓 ADMISSIONS OPEN FOR ${school.admissions.year} | 📞 Call: ${school.phone[0]} | 🏫 Hostel Facility Available for Boys | 📅 2nd Sunday: Parent Visiting Day`;

  return (
    <div className="bg-brand-gold overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-body font-semibold text-brand-navy mx-8">{text}</span>
        <span className="font-body font-semibold text-brand-navy mx-8">{text}</span>
      </div>
    </div>
  );
}
