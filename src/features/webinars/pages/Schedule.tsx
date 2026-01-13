// src/features/webinars/pages/Schedule.tsx
import { FaChevronDown } from "react-icons/fa";

const events = [
  { title: "Intro to Basics", person: "Dr. Ashish", day: 0, startHour: 10, durationHours: 1, color: "#fef3c7" },
  { title: "What is neuroimaging", person: "Dr. Aman", day: 1, startHour: 10, durationHours: 1, color: "#fde68a" },
  { title: "Dementia Topics", person: "Dr. Sachin", day: 3, startHour: 10, durationHours: 1, color: "#e9d5ff" },
  { title: "brachytherapy Topics", person: "Dr. Pratik", day: 1, startHour: 14, durationHours: 1, color: "#fecaca" },
  { title: "Hematological Tips", person: "Dr. Sonia Lee", day: 1, startHour: 14, durationHours: 2, color: "#fecaca" },
  { title: "What is neuroimaging", person: "Dr. Maria", day: 2, startHour: 14, durationHours: 2, color: "#93c5fd" },
  { title: "Cancer prevention in depth", person: "Dr. Maria", day: 4, startHour: 14, durationHours: 2, color: "#fecaca" },
  { title: "Solid Tumors", person: "Dr. Sourabh", day: 2, startHour: 13, durationHours: 1, color: "#bbf7d0" },
  { title: "Pharmacology in Detail", person: "Dr. Prashant", day: 4, startHour: 14, durationHours: 1, color: "#fecaca" },
];

function WeeklyCalendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [24, 25, 26, 27, 28, 29, 30];
  const hours = Array.from({ length: 14 }, (_, i) => 9 + i); // 9 AM - 10 PM

  return (
    <div className="rounded-2xl bg-white shadow ring-1 ring-slate-200">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-[15px] font-semibold">Weekly Calendar</h3>
        <div className="relative">
          <select
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 pr-8 appearance-none"
            defaultValue="All Days"
          >
            <option>All Days</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
          <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="grid grid-cols-[80px_repeat(7,minmax(0,1fr))] items-center px-3 py-2 text-xs text-slate-600">
          <div />
          {days.map((d, i) => (
            <div key={d} className="flex items-center justify-center gap-2">
              <span className="font-semibold text-slate-700">{d}</span>
              <span className="text-slate-400">{dates[i]}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[80px_repeat(7,minmax(0,1fr))]">
          <div className="relative">
            {hours.map((h) => (
              <div key={h} className="flex h-14 items-start justify-end pr-2 text-[11px] text-slate-500">
                {h <= 12 ? `${h}:00 AM` : `${h - 12}:00 PM`}
              </div>
            ))}
          </div>

          {days.map((_, dayIndex) => (
            <div key={dayIndex} className="relative">
              {hours.map((h) => (
                <div key={h} className="h-20 border-l border-t border-slate-100" />
              ))}

              {events
                .filter((e) => e.day === dayIndex)
                .map((e, i) => {
                  const rowStart = e.startHour - 9; // 9AM base
                  const height = e.durationHours * 80; // height calculation
                  return (
                    <div
                      key={i}
                      className="absolute left-1 right-1 rounded-md border border-slate-300 p-3 text-xs shadow-lg"
                      style={{ top: rowStart * 80 + 8, height, background: e.color }}
                    >
                      <p className="font-semibold text-slate-800">{e.title}</p>
                      {e.person && <p className="text-slate-500 mt-1">with {e.person}</p>}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Agenda() {
  return (
    <aside className="rounded-2xl bg-white shadow ring-1 ring-slate-200">
      <div className="px-5 py-4">
        <h3 className="text-[15px] font-semibold">Today's Agenda</h3>
      </div>
      <div className="space-y-4 border-t border-slate-100 px-5 py-4">
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="text-xs text-slate-500">10:00 AM</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">Intro to Basics</p>
          <p className="text-xs text-slate-600">with Dr. Prashant</p>
          <button className="mt-3 w-full rounded-md bg-[#12417D] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#e1e3e7] hover:text-[#12417D]">Join Now</button>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="text-xs text-slate-500">2:00 PM</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">Hematological Tips</p>
          <p className="text-xs text-slate-600">with Dr. Sachin</p>
          <button className="mt-3 w-full rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Register</button>
        </div>
      </div>
    </aside>
  );
}

export default function SchedulePage() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
      <WeeklyCalendar />
      <Agenda />
    </div>
  );
}
