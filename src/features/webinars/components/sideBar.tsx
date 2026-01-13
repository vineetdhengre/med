import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt, FaHome, FaVideo, FaBookmark, FaUser,  } from "react-icons/fa";
import "./sidebarStyle.css"

const avatar =
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop";

function Sidebar() {
 const items = [
      { icon: FaHome, label: "Home", href: "/webinars" },
      { icon: FaRegCalendarAlt, label: "My Schedule", href: "/webinars/schedule" },
      { icon: FaVideo, label: "Browse Webinars", href: "/webinars/webinar-list" },
      { icon: FaBookmark, label: "Saved Recordings", href: "/webinars/saved" },
      { icon: FaUser, label: "Profile", href: "/webinars/profile" },
  ];

  return (
    <aside className="webinar-sidebar">
      <nav className="flex flex-1 flex-col items-center gap-3">
        {items.map((it) => (
          <NavLink
            key={it.label}
            to={it.href}
            end={it.href === "/webinars"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-white text-[#0b376e]"
                  : "text-white/90 hover:text-white"
              } group flex w-20 flex-col items-center rounded-xl px-3 py-3 text-center shadow-sm transition`
            }
          >
            <it.icon className="h-5 w-5" />
            <span className="mt-2 text-[11px] leading-tight">{it.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#114168] px-4 py-3 text-white">
      <div className="flex items-center gap-6 text-sm">
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : " hover:text-slate-300"
          }
        >
          Browse
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            isActive ? "text-slate-400 font-semibold" : " hover:text-slate-300"
          }
        >
          My List
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm text-slate-500">Welcome back</p>
          <p className="text-[11px] text-slate-400">Dr. Naksh Bhanushali</p>
        </div>
        <img
          src={avatar}
          alt="Avatar"
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow"
        />
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sideBar-style">
      <Sidebar />
      <main className="flex-1">
        <TopBar />
        <div className="mx-auto w-full px-4 pb-12 pt-6">
          {children}
        </div>
      </main>
    </div>
  );
}
