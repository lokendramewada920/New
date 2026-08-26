import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { courses } from "../data/courses";
import { site, hasValue } from "../config/site";
import { whatsAppUrl } from "./ContactActions";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-lg border border-slate-700/80 bg-ink-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-bull/60 focus:ring-1 focus:ring-bull/30";

const selectCls = inputCls + " appearance-none cursor-pointer";

const LeadForm = ({ defaultCourse = "", source = "website" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: defaultCourse,
    mode: "",
    experience: "",
    callbackTime: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please add your name and phone number");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}${site.integrations.contactFormEndpoint}`, { ...form, source });
      toast.success("Demo request received", {
        description: "Our team will reach out to schedule your free demo session.",
      });
      if (hasValue(site.contact.whatsapp)) {
        const lines = [
          "Hi, I want to book a free demo class at Arts Of Finance.",
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          form.email && `Email: ${form.email}`,
          form.course && `Course: ${form.course}`,
          form.mode && `Mode: ${form.mode}`,
          form.experience && `Experience: ${form.experience}`,
          form.callbackTime && `Callback: ${form.callbackTime}`,
          form.message && `Message: ${form.message}`,
        ].filter(Boolean);
        setTimeout(() => window.open(whatsAppUrl(lines.join("\n")), "_blank", "noopener"), 800);
      }
      setForm({ name: "", phone: "", email: "", course: defaultCourse, mode: "", experience: "", callbackTime: "", message: "" });
    } catch {
      toast.error("Could not submit right now", { description: "Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} data-testid="lead-form" className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="lead-name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Name *</label>
        <input id="lead-name" data-testid="lead-form-name" className={inputCls} placeholder="Your full name" value={form.name} onChange={set("name")} required />
      </div>
      <div>
        <label htmlFor="lead-phone" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Phone Number *</label>
        <input id="lead-phone" data-testid="lead-form-phone" className={inputCls} placeholder="Your phone number" value={form.phone} onChange={set("phone")} required />
      </div>
      <div>
        <label htmlFor="lead-email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Email</label>
        <input id="lead-email" data-testid="lead-form-email" type="email" className={inputCls} placeholder="you@example.com" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <label htmlFor="lead-course" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Course Interested In</label>
        <select id="lead-course" data-testid="lead-form-course" className={selectCls} value={form.course} onChange={set("course")}>
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
          <option value="Not sure yet">Not sure yet — guide me</option>
        </select>
      </div>
      <div>
        <label htmlFor="lead-mode" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Learning Mode</label>
        <select id="lead-mode" data-testid="lead-form-mode" className={selectCls} value={form.mode} onChange={set("mode")}>
          <option value="">Select mode</option>
          <option value="Offline (Bhopal)">Offline — Bhopal classroom</option>
          <option value="Online (Live)">Online — live sessions</option>
          <option value="Either">Either works</option>
        </select>
      </div>
      <div>
        <label htmlFor="lead-experience" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Experience Level</label>
        <select id="lead-experience" data-testid="lead-form-experience" className={selectCls} value={form.experience} onChange={set("experience")}>
          <option value="">Select level</option>
          <option value="Beginner">Beginner — just starting</option>
          <option value="Intermediate">Intermediate — some market exposure</option>
          <option value="Advanced">Advanced — active trader/investor</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="lead-callback" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Preferred Callback Time</label>
        <select id="lead-callback" data-testid="lead-form-callback" className={selectCls} value={form.callbackTime} onChange={set("callbackTime")}>
          <option value="">Any time</option>
          <option value="Morning">Morning (9 AM – 12 PM)</option>
          <option value="Afternoon">Afternoon (12 PM – 4 PM)</option>
          <option value="Evening">Evening (4 PM – 8 PM)</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="lead-message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Message</label>
        <textarea id="lead-message" data-testid="lead-form-message" rows={4} className={inputCls} placeholder="Anything you'd like us to know — goals, questions, batch preferences..." value={form.message} onChange={set("message")} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={loading}
          data-testid="lead-form-submit-btn"
          className="btn-glow flex w-full items-center justify-center gap-2 rounded-full bg-bull px-7 py-4 font-heading text-sm font-bold uppercase tracking-[0.12em] text-ink-950 transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {loading ? "Submitting..." : "Book Free Demo"}
        </button>
        <p className="mt-3 text-center font-mono text-[10px] text-slate-500">
          No spam. A mentor connects with you to schedule the demo. CRM & email integration ready.
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
