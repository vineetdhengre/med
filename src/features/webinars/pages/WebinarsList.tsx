import React, { useEffect, useRef, useState } from "react";
import "./WebinarStyle.css";
import {
  FcMultipleDevices as FcMonitor,
  FcIdea,
  FcEditImage as FcEdit,
  FcBriefcase,
  FcBullish,
  FcSettings,
  FcReading,
} from "react-icons/fc";
import type { JSX } from "react/jsx-runtime";

/* =======================
   ICONS
======================= */

const MonitorIcon = () => <FcMonitor size={24} />;
const PencilIcon = () => <FcIdea size={24} />;
const PenIcon = () => <FcEdit size={24} />;
const BriefcaseIcon = () => <FcBriefcase size={24} />;
const TargetIcon = () => <FcBullish size={24} />;
const GearIcon = () => <FcSettings size={24} />;
const CapIcon = () => <FcReading size={24} />;

/* =======================
   TYPES
======================= */

type Category = { key: string; label: string; Icon: () => JSX.Element };

type NewsItem = {
  title: string;
  link?: string;
  image_url?: string;
};

/* =======================
   DATA
======================= */

const categories: Category[] = [
  { key: "it", label: "Neuro", Icon: MonitorIcon },
  { key: "creative", label: "Ortho", Icon: PencilIcon },
  { key: "writing", label: "MD", Icon: PenIcon },
  { key: "business", label: "Radio", Icon: BriefcaseIcon },
  { key: "sales", label: "Derma", Icon: TargetIcon },
  { key: "engineering", label: "Psychiatry", Icon: GearIcon },
  { key: "learning", label: "Cardio", Icon: CapIcon },
];

const popularCategories = [
  { title: "Ortheopadics", subtitle: "Color your dreams", image: "https://source.unsplash.com/600x450?illustration" },
  { title: "Doctor of Medicine", subtitle: "Build your brand", image: "https://source.unsplash.com/600x450?branding" },
  { title: "NeuroScience", subtitle: "Engage your audience", image: "https://source.unsplash.com/600x450?camera" },
  { title: "Dermatologist", subtitle: "Unlock growth online", image: "https://source.unsplash.com/600x450?seo" },
];

const avatars = [
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' rx='32' fill='%2306b6d4' /></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' rx='32' fill='%23f59e0b' /></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' rx='32' fill='%2310b981' /></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' rx='32' fill='%236367f1' /></svg>",
];

const topRated = [
  {
    brand: "Nursing",
    title: "Intro to Modern Web Nursing",
    image: "https://source.unsplash.com/600x450?gradient,design",
    host: { name: "Dr. Ashish", avatar: avatars[0] },
    priceRange: "$100-$500",
    rating: 4.9,
    reviews: 204,
    delivery: "2 day event",
  },
  {
    brand: "BioTechnoloy",
    title: "How Biotech is Changing the World",
    image: "https://source.unsplash.com/600x450?purple,abstract",
    host: { name: "Dr. Chandan", avatar: avatars[1] },
    priceRange: "$500-$1500",
    rating: 4.5,
    reviews: 320,
    delivery: "2–9 days",
  },
   {
    brand: "Neurology",
    title: "Neurology Basics",
    image: "https://source.unsplash.com/600x450?purple,abstract",
    host: { name: "Dr. Poonawala", avatar: avatars[2] },
    priceRange: "$500-$1500",
    rating: 4.7,
    reviews: 120,
    delivery: "2–5 days",
  },
   {
    brand: "Oncology",
    title: "How Oncology changing lives",
    image: "https://source.unsplash.com/600x450?purple,abstract",
    host: { name: "Dr. Satish", avatar: avatars[3] },
    priceRange: "$500-$1500",
    rating: 4.2,
    reviews: 220,
    delivery: "2–7 days",
  },
];

/* =======================
   COMPONENTS
======================= */

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default function WebinarsList() {
  /* 🔴 FIXED: hooks inside component */
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_97642dd5ffe1416293148263cba7adc1&q=health&country=in,us&language=en"
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data?.results)) {
          setNews(data.results);
        } else {
          console.error("News API returned invalid data:", data);
          setNews([]);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const popularRef = useRef<HTMLDivElement | null>(null);
  const ratedRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (ref: React.RefObject<HTMLDivElement | null>, delta = 360) => {
    ref.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="webinar-page">
      <div className="mainWeb-container">
        <div className="content-area">
          <main>
            <nav className="category-bar scrollbar-hidden">
              {categories.map(({ key, label, Icon }) => (
                <button key={key} className="category-chip">
                  <span className="chip-icon"><Icon /></span>
                  <span className="chip-label">{label}</span>
                </button>
              ))}
            </nav>

            <section className="section">
              <SectionHeader title="Popular Categories" />
              <div className="carousel-wrapper">
                <button className="carousel-arrow left" onClick={() => scrollBy(popularRef, -380)}>‹</button>
                <div className="cards-row scrollbar-hidden" ref={popularRef}>
                  {popularCategories.map((c) => (
                    <article key={c.title} className="popular-card" style={{ backgroundImage: `url(${c.image})` }}>
                      <div className="overlay" />
                      <div className="popular-content">
                        <h3>{c.title}</h3>
                        <span>{c.subtitle}</span>
                      </div>
                    </article>
                  ))}
                </div>
                <button className="carousel-arrow right" onClick={() => scrollBy(popularRef, 380)}>›</button>
              </div>
            </section>

            <section className="section">
              <SectionHeader title="Top Rated Webinars" subtitle="Learn and Earn" />
              <div className="carousel-wrapper">
                <button className="carousel-arrow left" onClick={() => scrollBy(ratedRef, -380)}>‹</button>
                <div className="cards-row scrollbar-hidden" ref={ratedRef}>
                  {topRated.map((w , _i) => (
                    <article key={w.title} className="service-card">
                      <div className="service-thumb" style={{ backgroundImage: `url(${w.image})` }}>
                        <span className="brand-pill">{w.brand}</span>
                      </div>
                      <div className="service-body">
                        <div className="host">
                          <img className="avatar" src={w.host.avatar} alt="host" />
                          <div>
                            <span className="host-name">{w.host.name}</span>
                            <p className="service-title">{w.title}</p>
                          </div>
                        </div>
                        <div className="service-meta">
                          <span className="price">{w.priceRange}</span>
                          <span className="rating">{w.rating} ({w.reviews})</span>
                        </div>
                        <div className="muted small">{w.delivery}</div>
                      </div>
                    </article>
                  ))}
                </div>
                <button className="carousel-arrow right" onClick={() => scrollBy(ratedRef, 380)}>›</button>
              </div>
            </section>
          </main>
        </div>

        <aside style={{ width: 320 }}>
          <div className="news-card">
            <h4>Latest Medical News</h4>
            {news.length === 0 ? (
              <p>No news yet</p>
            ) : (
              news.slice(0, 3).map((n, i) => (
                <a key={i} href={n.link} target="_blank" rel="noreferrer" className="news-item">
                  {n.image_url && <img src={n.image_url} alt={n.title} />}
                  <div>{n.title}</div>
                </a>
              ))
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
