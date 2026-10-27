import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BatteryFull,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock,
  Copy,
  Download,
  Layers,
  Lock,
  Moon,
  Package,
  Plus,
  ShieldCheck,
  Signal,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  Trash2,
  TrendingUp,
  Undo2,
  Vibrate,
  Wifi,
  WifiOff,
  X,
  Zap,
} from 'lucide-react'

const VERSION = '1.0.0'
const APK_PATH = '/downloads/taskflow-v1.0.0.apk'
const APK_SIZE = '48 MB'
const APK_SHA = '13ff92061ada80762ed37946e8391a23480027fc5ed74aa7897deddc5579e600'
const REPO = 'https://github.com/JonamMadeda/taskflow'
const RELEASES = 'https://github.com/JonamMadeda/taskflow/releases'
const ADB_CMD = 'adb install -r taskflow-v1.0.0.apk'

// ---------- brand ----------

function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`${
          compact ? 'w-8 h-8 rounded-[10px]' : 'w-9 h-9 rounded-[11px]'
        } flex items-center justify-center shrink-0`}
        style={{
          background: 'linear-gradient(135deg,#818CF8,#4F46E5)',
          boxShadow: '0 6px 20px -6px rgba(99,102,241,.9)',
        }}
      >
        <Check size={compact ? 17 : 19} strokeWidth={3.2} className="text-white" />
      </span>
      <span className="text-[19px] font-extrabold tracking-tight text-slate-900">
        Task<span className="text-indigo-600">Flow</span>
      </span>
    </span>
  )
}

function Eyebrow({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600">
      {icon}
      {children}
    </span>
  )
}

// ---------- app mockups ----------

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-[#F8FAFC]">
      <span className="tracking-tight">9:41</span>
      <span className="flex items-center gap-1.5 text-[#CBD5E1]">
        <Signal size={11} strokeWidth={2.5} />
        <Wifi size={11} strokeWidth={2.5} />
        <BatteryFull size={14} strokeWidth={2.5} />
      </span>
    </div>
  )
}

function ScreenHeader() {
  return (
    <div className="flex items-center gap-2.5 px-4 pt-2">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px]"
        style={{
          background: 'linear-gradient(135deg,#818CF8,#6366F1)',
          boxShadow: '0 8px 20px -8px rgba(99,102,241,.9)',
        }}
      >
        <Check size={22} strokeWidth={3} className="text-white" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[19px] font-bold leading-none tracking-tight text-[#F8FAFC]">
          TaskFlow
        </p>
        <p className="mt-1 text-[9.5px] font-medium text-[#94A3B8]">Tuesday, October 27</p>
      </div>
      <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-[#1E293B]/70 px-2.5 py-1.5">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#10B981]" />
        <span className="text-[8px] font-bold tracking-[0.14em] text-[#94A3B8]">TODAY</span>
      </span>
    </div>
  )
}

function ProgressCard() {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const progress = 0.67

  return (
    <div
      className="mx-4 mt-4 rounded-[20px] border border-indigo-400/25 p-4"
      style={{
        background:
          'linear-gradient(145deg, rgba(99,102,241,.22), rgba(30,41,59,.92) 58%, rgba(30,41,59,.92))',
        boxShadow: '0 16px 34px -22px rgba(0,0,0,.8)',
      }}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[8px] font-bold tracking-[0.16em] text-[#A5B4FC]">DAILY PROGRESS</p>
          <p className="mt-1.5 text-[13.5px] font-semibold leading-tight tracking-tight text-[#F8FAFC]">
            You&rsquo;re making progress
          </p>
          <p className="mt-1 text-[9.5px] font-medium text-[#94A3B8]">2 of 3 tasks complete</p>
        </div>
        <div className="relative h-[62px] w-[62px] shrink-0">
          <svg viewBox="0 0 62 62" className="h-full w-full -rotate-90">
            <circle cx="31" cy="31" r={radius} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="5.5" />
            <circle
              cx="31"
              cy="31"
              r={radius}
              fill="none"
              stroke="#6366F1"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              className="ring-progress"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-[#F8FAFC]">
            67%
          </span>
        </div>
      </div>
      <div className="mt-3.5 h-[6px] overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full"
          style={{
            width: '67%',
            background: 'linear-gradient(90deg,#818CF8,#6366F1)',
            boxShadow: '0 0 12px rgba(99,102,241,.8)',
          }}
        />
      </div>
    </div>
  )
}

function TaskRow({ title, done = false }) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-[15px] border px-3 py-2.5 ${
        done
          ? 'border-emerald-400/20 bg-emerald-400/[0.07]'
          : 'border-white/[0.04] bg-[#1E293B]'
      }`}
    >
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-[1.6px] ${
          done
            ? 'border-[#10B981] bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,.35)]'
            : 'border-[#475569]'
        }`}
      >
        {done && <Check size={13} strokeWidth={3.4} className="text-white" />}
      </span>
      <span
        className={`min-w-0 flex-1 truncate text-[11.5px] font-medium ${
          done ? 'text-[#94A3B8] line-through' : 'text-[#F8FAFC]'
        }`}
      >
        {title}
      </span>
      <Trash2 size={13} className="shrink-0 text-[#64748B]" strokeWidth={2} />
    </div>
  )
}

function TaskFlowScreen() {
  return (
    <>
      <StatusBar />
      <ScreenHeader />
      <ProgressCard />
      <div className="mt-4 flex items-center justify-between px-4">
        <p className="text-[13px] font-bold tracking-tight text-[#F8FAFC]">Your tasks</p>
        <p className="text-[9px] font-semibold text-[#94A3B8]">2 active</p>
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-2 px-4">
        <TaskRow title="Review the launch checklist" />
        <TaskRow title="Send the weekly update" />
        <TaskRow title="Plan tomorrow's top three" done />
      </div>
      <div className="px-4 pb-5 pt-3">
        <span
          className="flex items-center justify-center gap-1.5 rounded-[14px] py-2.5 text-[11.5px] font-bold text-white"
          style={{
            background: 'linear-gradient(135deg,#818CF8,#6366F1)',
            boxShadow: '0 10px 24px -10px rgba(99,102,241,.95)',
          }}
        >
          <Plus size={14} strokeWidth={3} /> New task
        </span>
      </div>
    </>
  )
}

function AddTaskScreen() {
  return (
    <>
      <StatusBar />
      <div className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none opacity-45 blur-[1px]">
          <ScreenHeader />
          <ProgressCard />
          <div className="mt-3 flex flex-col gap-2 px-4">
            <TaskRow title="Review the launch checklist" />
            <TaskRow title="Send the weekly update" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-x-0 bottom-0 rounded-t-[26px] border-t border-white/[0.07] bg-[#1E293B] px-4 pb-5 pt-2.5">
          <div className="mx-auto h-1 w-9 rounded-full bg-white/15" />
          <div className="mt-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-indigo-500/15">
              <Plus size={17} className="text-[#A5B4FC]" strokeWidth={2.6} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold leading-none tracking-tight text-[#F8FAFC]">
                New task
              </p>
              <p className="mt-1 text-[8.5px] text-[#94A3B8]">Keep it clear and actionable.</p>
            </div>
            <X size={15} className="text-[#94A3B8]" />
          </div>

          <div className="mt-3.5 flex items-center gap-2 rounded-[13px] border border-white/[0.06] bg-[#0F172A] px-3 py-3">
            <Sparkles size={13} className="text-[#94A3B8]" />
            <span className="text-[11px] font-medium text-[#94A3B8]">
              What needs to get done?
              <span className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-0.5 bg-[#A5B4FC]" />
            </span>
          </div>

          <div className="mt-3 flex gap-2">
            <span className="flex-1 rounded-[12px] border border-white/10 py-2.5 text-center text-[11px] font-semibold text-[#F8FAFC]">
              Cancel
            </span>
            <span className="flex-[2] rounded-[12px] bg-[#6366F1] py-2.5 text-center text-[11px] font-bold text-white shadow-[0_8px_20px_-10px_rgba(99,102,241,1)]">
              Add task
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

function Phone({ children, className = '', glow = false }) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-[60px] bg-[#4F46E5]/40 blur-3xl" />
      )}
      <div className="phone-frame relative mx-auto w-[286px] rounded-[42px] p-[9px] sm:w-[300px]">
        <div className="phone-notch absolute left-1/2 top-[9px] z-20 h-[25px] w-[108px] -translate-x-1/2 rounded-b-[16px]" />
        <div className="phone-screen relative flex h-[586px] flex-col overflow-hidden rounded-[34px] sm:h-[610px]">
          {children}
          <div className="absolute bottom-[7px] left-1/2 h-[4px] w-[92px] -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  )
}

// ---------- page ----------

export default function App() {
  const [copied, setCopied] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const el = document.createElement('textarea')
      el.value = value
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  const features = [
    {
      icon: <TrendingUp size={20} />,
      title: 'Progress you can feel',
      desc: 'A daily progress ring, animated bar and an encouraging headline that changes as you check things off.',
      tag: 'Daily ring',
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: 'One tap to done',
      desc: 'Tap any task to complete it. The checkbox pops, the title strikes through and a light haptic confirms it.',
      tag: 'Tap',
    },
    {
      icon: <Undo2 size={20} />,
      title: 'Deletes you can undo',
      desc: 'Tasks collapse away smoothly and a floating snackbar holds onto them. Changed your mind? One tap restores it.',
      tag: 'Undo',
    },
    {
      icon: <WifiOff size={20} />,
      title: 'Offline by design',
      desc: 'No account, no sync server, no ads. Tasks are saved locally on your phone and survive every restart.',
      tag: 'Local',
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Animated where it counts',
      desc: 'An animated bottom sheet, staggered list inserts and a tiny empty state that makes starting feel easy.',
      tag: 'Motion',
    },
    {
      icon: <Moon size={20} />,
      title: 'Dark-first Material 3',
      desc: 'An indigo and emerald palette on deep slate, designed to stay comfortable during late-night planning.',
      tag: 'App theme',
    },
  ]

  const steps = [
    {
      icon: <Download size={20} />,
      title: 'Download the APK',
      desc: `Grab the ${APK_SIZE} release build of TaskFlow ${VERSION} straight from this page.`,
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Allow the install',
      desc: 'Open the file and let Android install it. If prompted, allow your browser to install unknown apps.',
    },
    {
      icon: <Target size={20} />,
      title: 'Add your first task',
      desc: 'Open TaskFlow, tap New task and start with the one thing that matters most today.',
    },
  ]

  const faqs = [
    {
      q: 'Is TaskFlow really free?',
      a: 'Yes. TaskFlow is an open-source project. Download the APK for free, use it without limits, and read the source on GitHub if you are curious how it works.',
    },
    {
      q: 'Do I need an account or an internet connection?',
      a: 'No account, no sign-in and no connection required. TaskFlow was built offline-first: everything runs on your device and never leaves it.',
    },
    {
      q: 'Where are my tasks stored?',
      a: 'Tasks are JSON-encoded and saved with shared_preferences under the taskflow_tasks_v1 key in the app’s private storage. Uninstalling the app removes that data, so keep that in mind before you clear it.',
    },
    {
      q: 'Which Android versions are supported?',
      a: 'TaskFlow targets modern Android and installs on Android 7.0 (API 24) and newer. If your phone can run current Android apps, it can run TaskFlow.',
    },
    {
      q: 'Why does Android warn me about installing the APK?',
      a: 'Because the app is installed directly rather than through the Play Store. Android shows a standard “unknown apps” prompt; choose your browser, allow the install, and continue. You can revoke that permission afterwards.',
    },
    {
      q: 'Will I lose my tasks when I update?',
      a: 'No. Installing a newer build over the old one keeps the same package (com.taskflow.taskflow) and the same local data, so your tasks stay in place.',
    },
    {
      q: 'Is it on the Play Store?',
      a: 'Not yet. For now the release APK is the easiest way to install it. You can also clone the repository and build it yourself with Flutter.',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* background decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[820px] bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="bg-grid absolute inset-0" />
        <div className="glow-orb absolute -top-40 left-1/2 h-[520px] w-[780px] -translate-x-1/2 bg-[#818CF8]" style={{ opacity: 0.18 }} />
        <div className="glow-orb absolute right-[-160px] top-[820px] h-[380px] w-[380px] bg-[#34D399]" style={{ opacity: 0.12 }} />
        <div className="glow-orb absolute left-[-180px] top-[1500px] h-[420px] w-[420px] bg-[#A5B4FC]" style={{ opacity: 0.16 }} />
      </div>

      <div className="relative z-10">
        {/* ===== NAV ===== */}
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
          <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
            <a href="#top" className="shrink-0" aria-label="TaskFlow home">
              <Logo />
            </a>
            <div className="ml-2 hidden items-center gap-7 text-[14px] font-medium text-slate-500 md:flex">
              <a href="#features" className="transition hover:text-slate-900">Features</a>
              <a href="#preview" className="transition hover:text-slate-900">Preview</a>
              <a href="#install" className="transition hover:text-slate-900">Install</a>
              <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
            </div>
            <div className="ml-auto flex items-center gap-2.5">
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost hidden items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-700 sm:flex"
              >
                <GithubIcon size={15} /> Source
              </a>
              <a
                href={APK_PATH}
                download={`taskflow-v${VERSION}.apk`}
                className="btn-primary flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-semibold text-white"
              >
                <Download size={15} /> <span className="hidden sm:inline">Download APK</span>
                <span className="sm:hidden">APK</span>
              </a>
            </div>
          </nav>
        </header>

        {/* ===== HERO ===== */}
        <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="rise text-center lg:text-left">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-slate-500 shadow-sm lg:justify-start">
                <span className="live-dot h-2 w-2 rounded-full bg-[#10B981]" />
                <span className="font-semibold text-slate-900">v{VERSION}</span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1">
                  <Smartphone size={12} /> Android APK
                </span>
                <span className="hidden rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[10.5px] font-semibold text-indigo-600 sm:inline">
                  {APK_SIZE}
                </span>
              </div>

              <h1 className="mt-6 text-[42px] font-black leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-[68px]">
                Plan less.
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(100deg,#4F46E5,#6366F1 45%,#7C3AED)' }}
                >
                  Finish more.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                TaskFlow is a calm, dark-mode to-do app for Android. Add what matters,
                watch your daily progress fill in, and keep every task{' '}
                <span className="font-semibold text-slate-900">on your own device</span>{' '}
                — no accounts, no noise.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href={APK_PATH}
                  download={`taskflow-v${VERSION}.apk`}
                  className="btn-primary flex w-full items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white sm:w-auto"
                >
                  <Download size={18} /> Download free APK
                </a>
                <a
                  href="#preview"
                  className="btn-ghost flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-[15px] font-bold text-slate-900 sm:w-auto"
                >
                  See it in action <ArrowDown size={17} />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] font-mono text-slate-500 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <Lock size={12} className="text-[#059669]" /> No account
                </span>
                <span className="flex items-center gap-1.5">
                  <WifiOff size={12} className="text-indigo-500" /> Works offline
                </span>
                <span className="flex items-center gap-1.5">
                  <Package size={12} className="text-amber-500" /> {APK_SIZE} APK
                </span>
                <span className="flex items-center gap-1.5">
                  <GithubIcon size={12} className="text-slate-400" /> Open source
                </span>
              </div>
            </div>

            {/* phone */}
            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute left-1/2 top-1/2 -z-10 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/30" />
              <div className="absolute left-1/2 top-1/2 -z-10 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20" />

              <Phone className="animate-float-y" glow>
                <TaskFlowScreen />
              </Phone>

              <div className="absolute -left-2 top-16 hidden rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-3 shadow-xl shadow-indigo-500/10 backdrop-blur-md lg:-left-6 lg:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Today
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-[14px] font-bold text-slate-900">
                  <TrendingUp size={14} className="text-[#059669]" /> 67% complete
                </p>
              </div>

              <div className="absolute -right-1 bottom-20 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-3 shadow-xl shadow-indigo-500/10 backdrop-blur-md lg:-right-4 lg:flex">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                  <ShieldCheck size={16} className="text-[#059669]" />
                </span>
                <div>
                  <p className="text-[11.5px] font-bold leading-none text-slate-900">Stored locally</p>
                  <p className="mt-1 text-[9.5px] text-slate-500">Private by default</p>
                </div>
              </div>
            </div>
          </div>

          {/* stat strip */}
          <div className="mt-14 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-sm sm:mt-16 sm:grid-cols-4 sm:p-5">
            {[
              { value: '1.0.0', label: 'Current release' },
              { value: APK_SIZE, label: 'APK download' },
              { value: '0', label: 'Accounts required' },
              { value: '100%', label: 'Offline storage' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <Eyebrow icon={<Zap size={12} />}>Everything in its place</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight text-slate-900 sm:text-[42px]">
              Built to get out of <span className="text-indigo-600">your way</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
              No dashboards to configure, no projects to name. Just a short list, a clear
              sense of progress and a satisfying finish.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card rounded-2xl p-6 text-left">
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{
                      background: 'linear-gradient(135deg,#818CF8,#4F46E5)',
                      boxShadow: '0 8px 20px -12px rgba(79,70,229,.7)',
                    }}
                  >
                    {f.icon}
                  </span>
                  <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 font-mono text-[10.5px] font-semibold text-indigo-600">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PREVIEW ===== */}
        <section id="preview" className="scroll-mt-20 border-y border-slate-200 bg-slate-50/80">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
              <div className="text-center lg:text-left">
                <Eyebrow icon={<Layers size={12} />}>A look inside</Eyebrow>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-[42px]">
                  Small app.
                  <br />
                  <span className="text-[#059669]">Focused flow.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-600 lg:mx-0">
                  Two screens do almost everything: the list you check off and the sheet
                  you add from. That is the whole app.
                </p>

                <div className="mx-auto mt-7 max-w-md space-y-3 text-left lg:mx-0">
                  {[
                    {
                      icon: <Clock size={15} />,
                      title: 'Open to today',
                      desc: 'Your list is the first and only screen. No onboarding, no feed.',
                    },
                    {
                      icon: <Vibrate size={15} />,
                      title: 'Haptics that agree',
                      desc: 'Light taps for adding, a selection click for completing, a medium thud for deleting.',
                    },
                    {
                      icon: <Undo2 size={15} />,
                      title: 'A safety net',
                      desc: 'Every delete sits in an Undo snackbar for four seconds before it is gone.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-[13.5px] font-bold text-slate-900">{item.title}</p>
                        <p className="mt-0.5 text-[12.5px] leading-relaxed text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 flex justify-center gap-4 sm:gap-6 lg:mt-0">
                <div className="animate-float-y-slow">
                  <Phone>
                    <TaskFlowScreen />
                  </Phone>
                  <p className="mt-4 text-center text-[11.5px] font-mono text-slate-500">
                    Your day, at a glance
                  </p>
                </div>
                <div className="animate-float-y hidden sm:block" style={{ animationDelay: '1.2s' }}>
                  <Phone>
                    <AddTaskScreen />
                  </Phone>
                  <p className="mt-4 text-center text-[11.5px] font-mono text-slate-500">
                    Adding takes seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INSTALL ===== */}
        <section id="install" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <Eyebrow icon={<Download size={12} />}>Three steps</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-[42px]">
              From download to <span className="text-indigo-600">done</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
              TaskFlow installs like any Android app — just without the store.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600">
                    {step.icon}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-slate-300">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{step.desc}</p>
                {i < 2 && (
                  <ArrowRight
                    size={17}
                    className="absolute -right-[18px] top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-slate-50 text-indigo-500 md:block"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-2">
                <Terminal size={15} className="text-indigo-600" />
                <p className="text-[13px] font-bold text-slate-900">Prefer the command line?</p>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-[12px] sm:text-[13px]">
                <span className="text-indigo-500">$</span>
                <code className="min-w-0 flex-1 truncate text-slate-700">{ADB_CMD}</code>
                <button
                  type="button"
                  onClick={() => copy(ADB_CMD, 'adb')}
                  className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-900"
                  aria-label="Copy adb command"
                >
                  {copied === 'adb' ? (
                    <Check size={14} className="text-[#059669]" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
                Requires Android platform tools and USB debugging. The same command works for
                future updates.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#059669]" />
                  <p className="text-[13px] font-bold text-slate-900">No store, no sign-in</p>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
                  The APK is built straight from the public Flutter source. Keep it, share it,
                  or rebuild it yourself — nothing phones home.
                </p>
              </div>
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-indigo-600 transition hover:text-indigo-800"
              >
                Browse the source <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ===== DOWNLOAD ===== */}
        <section id="download" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-6 sm:p-10 lg:p-12">
            <div className="glow-orb absolute -right-24 -top-28 h-[380px] w-[380px] bg-[#818CF8]" style={{ opacity: 0.18 }} />
            <div className="glow-orb absolute -bottom-32 -left-20 h-[320px] w-[320px] bg-[#34D399]" style={{ opacity: 0.12 }} />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="text-center lg:text-left">
                <Eyebrow icon={<Package size={12} />}>Get the app</Eyebrow>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-[40px]">
                  TaskFlow for Android
                </h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600 lg:mx-0">
                  One APK. Your tasks, your device, your pace. Install it in under a minute.
                </p>

                <dl className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-2.5 text-left lg:mx-0">
                  {[
                    ['Version', VERSION],
                    ['Size', APK_SIZE],
                    ['Requires', 'Android 7.0+'],
                    ['Package', 'com.taskflow.taskflow'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2.5"
                    >
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        {label}
                      </dt>
                      <dd className="mt-1 truncate font-mono text-[11.5px] font-semibold text-slate-800">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                  <a
                    href={APK_PATH}
                    download={`taskflow-v${VERSION}.apk`}
                    className="btn-primary flex w-full items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white sm:w-auto"
                  >
                    <Download size={18} /> Download APK · {APK_SIZE}
                  </a>
                  <a
                    href={RELEASES}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-[14px] font-bold text-slate-900 sm:w-auto"
                  >
                    <GithubIcon size={16} /> GitHub Releases
                  </a>
                </div>
                <p className="mt-4 text-[11.5px] leading-relaxed text-slate-500">
                  Release builds are signed with the debug keystore for sideloading. Configure
                  a private keystore before publishing to Google Play.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600">
                  What&rsquo;s new in {VERSION}
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Animated add-task bottom sheet',
                    'Daily progress ring and bar',
                    'Undo snackbar for deleted tasks',
                    'Offline persistence across restarts',
                    'Material 3 dark theme with haptics',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                      <Check size={14} strokeWidth={3} className="mt-0.5 shrink-0 text-[#059669]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      SHA-256
                    </p>
                    <button
                      type="button"
                      onClick={() => copy(APK_SHA, 'sha')}
                      className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10.5px] font-semibold text-slate-500 transition hover:text-slate-900"
                    >
                      {copied === 'sha' ? (
                        <>
                          <Check size={11} className="text-[#059669]" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={11} /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <p className="mt-2 break-all font-mono text-[10px] leading-relaxed text-slate-500">
                    {APK_SHA}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="text-center">
            <Eyebrow icon={<CircleHelp size={12} />}>Good to know</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-[42px]">
              Questions, answered
            </h2>
          </div>

          <div className="mt-8 space-y-2.5">
            {faqs.map((faq) => {
              const open = openFaq === faq.q
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    open
                      ? 'border-indigo-300 bg-indigo-50/60'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : faq.q)}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                    aria-expanded={open}
                  >
                    <span className="flex-1 text-[14px] font-semibold text-slate-800 sm:text-[14.5px]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={17}
                      className={`faq-icon shrink-0 transition-transform ${
                        open ? 'rotate-180 text-indigo-600' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  {open && (
                    <p className="px-4 pb-4 text-[13px] leading-relaxed text-slate-600 sm:px-5">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-6 py-10 text-center sm:px-12 sm:py-14">
            <div className="glow-orb absolute -top-24 left-1/2 h-[260px] w-[480px] -translate-x-1/2 bg-[#818CF8]" style={{ opacity: 0.2 }} />
            <div className="relative">
              <div className="flex justify-center">
                <Logo />
              </div>
              <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Your next task is waiting.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[15px] text-slate-600">
                Add it in seconds. Check it off. Feel the day move.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={APK_PATH}
                  download={`taskflow-v${VERSION}.apk`}
                  className="btn-primary flex w-full items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white sm:w-auto"
                >
                  <Download size={18} /> Download TaskFlow
                </a>
                <a
                  href={REPO}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-[15px] font-bold text-slate-900 sm:w-auto"
                >
                  <GithubIcon size={17} /> Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex flex-col items-start gap-8 md:flex-row">
              <div>
                <Logo compact />
                <p className="mt-3 max-w-xs text-[12.5px] leading-relaxed text-slate-500">
                  A modern, dark-mode task manager for Android. Offline-first, open source and
                  quietly fast.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-4 md:ml-auto">
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    App
                  </p>
                  <div className="mt-2.5 flex flex-col gap-2 text-[12.5px] text-slate-600">
                    <a href="#features" className="transition hover:text-slate-900">Features</a>
                    <a href="#preview" className="transition hover:text-slate-900">Preview</a>
                    <a href="#install" className="transition hover:text-slate-900">Install</a>
                  </div>
                </div>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Download
                  </p>
                  <div className="mt-2.5 flex flex-col gap-2 text-[12.5px] text-slate-600">
                    <a href={APK_PATH} download={`taskflow-v${VERSION}.apk`} className="transition hover:text-slate-900">
                      APK · {APK_SIZE}
                    </a>
                    <a href={RELEASES} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                      Releases
                    </a>
                    <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
                  </div>
                </div>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Project
                  </p>
                  <div className="mt-2.5 flex flex-col gap-2 text-[12.5px] text-slate-600">
                    <a href={REPO} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                      Source code
                    </a>
                    <a href={REPO} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2 border-t border-slate-200 pt-6 text-[11.5px] text-slate-400 sm:flex-row">
              <span>© 2026 TaskFlow. Built with Flutter.</span>
              <span className="font-mono sm:ml-auto">v{VERSION} · Android · {APK_SIZE}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
