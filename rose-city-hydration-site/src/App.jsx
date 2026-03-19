import { useEffect } from "react";

export default function RoseCityHydrationLuxurySite() {
  useEffect(() => {
    document.title = "Mobile IV Therapy Portland | Rose City Hydration & Wellness";

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Luxury mobile IV therapy in Portland, Oregon. Hydration, energy, immunity, and wellness IV drips delivered to your home, hotel, or office.";
    document.head.appendChild(metaDesc);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Rose City Hydration & Wellness",
      areaServed: "Portland, Oregon",
      description:
        "Mobile IV therapy services including hydration, immunity, energy, and recovery treatments.",
      url: "https://rosecityhydrationandwellness.com",
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(metaDesc)) document.head.removeChild(metaDesc);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const treatments = [
    {
      name: "Hydration",
      price: "$199",
      description:
        "A simple hydration-focused IV built with Lactated Ringer’s or Sodium Chloride 0.9% in a 500–1000ml bag for elevated everyday rehydration.",
      highlights: ["500–1000ml fluids", "Simple rehydration", "Pregnancy/nursing safe per menu"],
    },
    {
      name: "Myer’s",
      price: "$249",
      description:
        "A premium wellness blend featuring vitamin C, magnesium chloride, and pyridoxine with optional beauty and recovery-focused add-ons.",
      highlights: ["Vitamin C", "Magnesium", "B-vitamin support"],
    },
    {
      name: "Energy",
      price: "$229",
      description:
        "A revitalizing IV designed around magnesium, vitamin C, and B-complex support for clients seeking a polished energy reset.",
      highlights: ["Magnesium", "Ascorbic acid", "B-complex support"],
    },
    {
      name: "Immune",
      price: "$259",
      description:
        "A proactive immune-support drip featuring zinc and vitamin C, with optional glutathione, B-plex, and pyridoxine add-ons.",
      highlights: ["Zinc", "Vitamin C", "Immune support"],
    },
    {
      name: "Beauty / Youth",
      price: "$299",
      description:
        "A glow-focused infusion designed with vitamin C, biotin, and glycine to support skin, hair, nail, and healthy-aging rituals.",
      highlights: ["Biotin", "Vitamin C", "Beauty support"],
    },
    {
      name: "Athlete Recovery",
      price: "$279",
      description:
        "A performance-minded drip featuring amino acids, B12, and glycine to support muscle conditioning, endurance, and post-training recovery.",
      highlights: ["Amino acids", "B12", "Recovery support"],
    },
    {
      name: "Detox / Hangover",
      price: "$269",
      description:
        "An indulgent reset for recovery days with magnesium and vitamin C, plus optional glutathione and B12 support.",
      highlights: ["Recovery support", "Magnesium", "Vitamin C"],
    },
    {
      name: "Fat Burner / Lipo",
      price: "$309",
      description:
        "A metabolism and wellness-focused drip built around bi-amino support, glutathione, and glycine, with optional lipo add-ons.",
      highlights: ["Bi-amino", "Glutathione", "Metabolism support"],
    },
    {
      name: "Migraine",
      price: "$249",
      description:
        "A targeted support infusion featuring pyridoxine and B-complex, with optional magnesium and provider-approved symptom add-ons.",
      highlights: ["Pyridoxine", "B-complex", "Targeted support"],
    },
    {
      name: "Prenatal",
      price: "$239",
      description:
        "A pregnancy-focused hydration option including B12, pyridoxine, and folic acid, presented in a calm concierge setting.",
      highlights: ["Prenatal support", "B12", "Folic acid"],
    },
  ];

  const addons = [
    { name: "Vitamin B12 Boost", price: "$30", desc: "Energy and metabolism support" },
    { name: "Glutathione Push", price: "$60", desc: "Detox and skin glow support" },
    { name: "Vitamin C Boost", price: "$40", desc: "Immune and antioxidant support" },
    { name: "Magnesium", price: "$35", desc: "Relaxation and muscle support" },
    { name: "Zinc", price: "$25", desc: "Immune support" },
    { name: "Biotin", price: "$35", desc: "Hair, skin, and nails" },
    { name: "Amino Blend", price: "$45", desc: "Recovery and performance" },
    { name: "Lipo (Fat Burner)", price: "$50", desc: "Metabolism support" },
    { name: "NAD+ (Premium)", price: "$250+", desc: "Advanced cellular support" },
  ];

  const memberships = [
    {
      name: "Essential Membership",
      price: "$199/mo",
      benefits: ["1 IV drip per month", "$25 off additional visits", "Priority booking"],
    },
    {
      name: "Elite Membership",
      price: "$299/mo",
      benefits: ["1 premium IV per month", "2 free add-ons", "$50 off additional visits"],
    },
    {
      name: "VIP Membership",
      price: "$399/mo",
      benefits: ["2 IV drips per month", "Free add-ons each visit", "VIP scheduling + concierge perks"],
    },
  ];

  const perks = [
    "Licensed medical professionals",
    "In-home and on-location appointments",
    "Premium, client-first experience",
    "Easy booking and concierge communication",
    "Group events, bridal, and corporate wellness options",
    "Designed for discretion, comfort, and convenience",
  ];

  const steps = [
    {
      title: "Choose your treatment",
      text: "Browse curated IV options and select the experience that best fits your goals, schedule, and setting.",
    },
    {
      title: "Book your visit",
      text: "Reserve your appointment online and complete a streamlined intake before your service is confirmed.",
    },
    {
      title: "We come to you",
      text: "A qualified provider arrives at your home, office, hotel, or event with a calm, luxury-focused bedside manner.",
    },
    {
      title: "Relax and reset",
      text: "Settle in and enjoy a comfortable wellness experience built around privacy, professionalism, and ease.",
    },
  ];

  const faqs = [
    {
      q: "Where do you provide mobile IV services?",
      a: "Rose City Hydration & Wellness provides concierge mobile appointments at homes, offices, hotels, and select event locations.",
    },
    {
      q: "How long does an appointment take?",
      a: "Most appointments are designed to be efficient and comfortable, with timing depending on the selected treatment and intake process.",
    },
    {
      q: "Do you offer group bookings?",
      a: "Yes. This layout supports private events, bridal parties, wellness activations, and corporate bookings.",
    },
    {
      q: "How do I get started?",
      a: "Clients can begin by booking online, contacting your team, or requesting a concierge consultation for a more guided experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#081F2E]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8fafc]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Rose City Logo" className="h-10 w-auto" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#0590EC]">Rose City Hydration & Wellness</p>
              <h1 className="font-serif text-xl text-[#081F2E]">Luxury Mobile IV Therapy</h1>
            </div>
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#events" className="hover:opacity-70">Events</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <a href="#book" className="rounded-full bg-[#081F2E] px-5 py-3 text-sm text-white shadow-sm transition hover:-translate-y-0.5">
            Book Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,75,118,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(5,144,236,0.12),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
          <div className="relative z-10">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#F54B76]">Concierge wellness, delivered</p>
            <h2 className="max-w-3xl font-serif text-5xl leading-tight text-[#081F2E] md:text-7xl">
              Mobile IV Therapy in Portland, Oregon
              <br />
              Elevated mobile IV therapy for clients who expect comfort, privacy, and polish.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              Rose City Hydration & Wellness brings a premium, nurse-led IV experience directly to your home, hotel,
              office, or event—so wellness feels seamless, sophisticated, and personal.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#book" className="rounded-full bg-[#081F2E] px-6 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5">
                Reserve Your Visit
              </a>
              <a href="#services" className="rounded-full border border-black/10 bg-white/70 px-6 py-4 text-sm uppercase tracking-[0.2em] text-[#081F2E] backdrop-blur transition hover:bg-white">
                Explore Treatments
              </a>
            </div>
            <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Mobile Convenience", "We come to you"],
                ["Luxury Experience", "Calm, discreet, elevated"],
                ["Event Ready", "Private + corporate bookings"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/60 bg-white/70 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#F54B76]">{title}</p>
                  <p className="mt-2 text-base text-black/70">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <img src="/logo.jpg" alt="Rose City Logo" className="h-40 w-auto" />
            </div>
            <div className="rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,247,255,0.92))] p-6 shadow-2xl shadow-[#0590EC]/10">
              <div className="rounded-[1.5rem] bg-[#081F2E] p-8 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Signature service</p>
                <h3 className="mt-3 font-serif text-3xl">Wellness that arrives beautifully.</h3>
                <p className="mt-4 leading-7 text-white/75">
                  Curated mobile infusions, premium add-ons, and concierge-level care for everyday wellness, recovery,
                  events, and self-care rituals.
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F54B76]">Starting at</p>
                  <p className="mt-2 font-serif text-4xl">$199+</p>
                  <p className="mt-2 text-sm text-black/60">Luxury mobile IV appointments tailored to your menu.</p>
                </div>
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F54B76]">Availability</p>
                  <p className="mt-2 font-serif text-4xl">7 Days</p>
                  <p className="mt-2 text-sm text-black/60">Ideal for home visits, hotels, offices, and curated group experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-4 rounded-[2rem] border border-black/5 bg-white p-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk} className="rounded-2xl bg-[#eef7ff] px-4 py-4 text-sm tracking-wide text-black/75">
              {perk}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">Curated treatments</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">A refined IV menu designed for modern wellness.</h3>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/65">
            Your menu reflects the Hydreight Empower 2024 lineup in a polished, luxury presentation.
          </p>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#0590EC]/20 bg-[#eef7ff] p-5 text-sm leading-7 text-black/70">
          Signature offerings include Hydration, Myer’s, Energy, Immune, Beauty/Youth, Athlete Recovery, Detox/Hangover, Fat Burner/Lipo, Migraine, and Prenatal drips.
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((item) => (
            <article
              key={item.name}
              style={{ position: "relative" }}
              className="group rounded-[2rem] border border-black/6 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {item.name === "Myer’s" && (
                <div className="absolute -top-3 right-4 rounded-full bg-[#F54B76] px-3 py-1 text-xs text-white shadow">
                  MOST POPULAR
                </div>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#F54B76]">Signature drip</p>
                  <h4 className="mt-3 font-serif text-2xl">{item.name}</h4>
                </div>
                <span className="rounded-full bg-[#eef7ff] px-3 py-2 text-sm text-[#081F2E]">{item.price}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-black/68">{item.description}</p>
              <div className="mt-6 space-y-3 border-t border-black/6 pt-5">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 text-sm text-black/70">
                    <span className="h-2 w-2 rounded-full bg-[#0590EC]" />
                    {highlight}
                  </div>
                ))}
              </div>
              <a href="#book" className="mt-8 inline-flex text-sm uppercase tracking-[0.22em] text-[#F54B76]">
                Book this service →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="addons" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">Enhance your drip</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">Premium add-ons for a fully customized experience.</h3>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/65">
            Upsell-friendly enhancements designed to elevate each treatment while increasing your average ticket.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {addons.map((item) => (
            <div key={item.name} className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-2xl">{item.name}</h4>
                <span className="text-sm text-[#F54B76]">{item.price}</span>
              </div>
              <p className="mt-3 text-sm text-black/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="memberships" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">Memberships</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">Wellness, on a monthly plan.</h3>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/65">
            Recurring wellness plans designed for consistency, savings, and VIP-level care.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {memberships.map((plan) => (
            <div key={plan.name} className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-sm transition hover:shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-2xl">{plan.name}</h4>
                <span className="text-sm text-[#F54B76]">{plan.price}</span>
              </div>
              <div className="mt-4 space-y-2">
                {plan.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-black/70">
                    <span className="h-2 w-2 rounded-full bg-[#0590EC]" />
                    {b}
                  </div>
                ))}
              </div>
              <a href="#book" className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#F54B76]">
                Join Now →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-[#081F2E] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">The experience</p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">Luxury care should feel effortless from booking to bedside.</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Simple steps, premium reassurance, and a clear path to booking.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.35em] text-[#F54B76]">Step {index + 1}</p>
                <h4 className="mt-3 font-serif text-2xl">{step.title}</h4>
                <p className="mt-4 leading-7 text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">Private events + partnerships</p>
            <h3 className="mt-3 font-serif text-4xl">From bridal mornings to executive wellness days.</h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/68">
              Showcase high-value bookings with a dedicated section for special events, hotel partnerships, recovery lounges, influencer activations, and company wellness experiences.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Bridal suites & wedding weekends",
                "Athlete recovery & fitness events",
                "Corporate wellness activations",
                "Hotel, concierge & travel partnerships",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#eef7ff] p-4 text-sm text-black/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="book" className="rounded-[2rem] bg-[linear-gradient(180deg,#081F2E,#0590EC,#F54B76)] p-8 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Ready to book</p>
            <h3 className="mt-3 font-serif text-4xl">Concierge booking</h3>
            <p className="mt-5 leading-8 text-white/80">
              Booking is currently available through the Hydreight widget or your concierge team.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-2xl">
              <iframe
                src="https://booking.hydreight.com/widget-business/mn17m"
                title="Hydreight Booking"
                className="h-[700px] w-full"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="rounded-full border border-white/20 px-4 py-2">Secure booking</span>
              <span className="rounded-full border border-white/20 px-4 py-2">Mobile concierge care</span>
              <span className="rounded-full border border-white/20 px-4 py-2">Instant appointment access</span>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">Service areas</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">Mobile IV therapy near you.</h3>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/65">
            We provide concierge IV therapy across Portland and surrounding areas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Portland",
            "NW Portland (Pearl District, Nob Hill)",
            "Southwest Portland (West Hills)",
            "Beaverton",
            "Hillsboro",
            "Lake Oswego",
            "Clackamas",
            "Tigard",
            "Happy Valley",
            "West Linn",
            "Bethany / Cedar Hills",
          ].map((city) => (
            <div key={city} className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-sm">
              <h4 className="font-serif text-2xl">IV Therapy in {city}</h4>
              <p className="mt-3 text-sm text-black/65">
                Mobile IV therapy services available in {city}. Book hydration, immunity, energy, and recovery treatments delivered to your home, hotel, or office.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#F54B76]">FAQ</p>
          <h3 className="mt-3 font-serif text-4xl">Questions, answered with elegance and clarity.</h3>
        </div>
        <div className="grid gap-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-sm">
              <h4 className="font-serif text-2xl">{faq.q}</h4>
              <p className="mt-3 max-w-4xl text-base leading-8 text-black/68">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/6 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#F54B76]">Rose City Hydration & Wellness</p>
            <p className="mt-2 text-sm text-black/60">Luxury mobile IV therapy for wellness, recovery, and concierge care.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-black/65">
            <a href="#services">Services</a>
            <a href="#experience">How It Works</a>
            <a href="#events">Events</a>
            <a href="#book">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
