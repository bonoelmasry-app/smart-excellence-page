"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Bot, Building2, CheckCircle2, FileText, Layers3, ShieldCheck, Sparkles, Trophy, Users, Workflow } from "lucide-react";

const awardPrograms = [
  "برامج التميز الحكومية على مستوى الإمارة أو الحكومة",
  "الجوائز الداخلية للإدارات والموظفين والأوسمة",
  "إدارة ملفات المشاركة في الجوائز المحلية والدولية",
  "الجوائز التي تنظمها الجهات الحكومية وتدعو الآخرين للمشاركة فيها",
];

const useCases = [
  {
    title: "برامج التميز الحكومية",
    desc: "تمكين الجهات المالكة للجوائز من إدارة الدورة كاملة: إنشاء الجائزة، تسجيل الجهات المشاركة، التقييم، المعايرة، النتائج، والتقارير.",
    icon: Building2,
  },
  {
    title: "الجوائز الداخلية",
    desc: "إدارة الجوائز الداخلية التي تستهدف الموظفين والوحدات التنظيمية، بما في ذلك فئات الأوسمة الفردية والجوائز المؤسسية.",
    icon: Users,
  },
  {
    title: "الجوائز الخارجية",
    desc: "إعداد وإدارة ملفات الترشح للمشاركة في الجوائز المحلية والإقليمية والدولية عبر مكتبة أدلة موحدة ونماذج منظمة.",
    icon: Trophy,
  },
  {
    title: "جوائز تنظمها الجهة",
    desc: "إدارة الجوائز التي تطلقها الجهات الحكومية وتدعو المؤسسات أو الأفراد للمشاركة فيها عبر بوابة رقمية متكاملة.",
    icon: Layers3,
  },
];

const workflow = [
  {
    title: "إنشاء الجائزة",
    desc: "تحديد النوع، الفئات، المحاور، المعايير، الأوزان، والجدول الزمني.",
  },
  {
    title: "إدارة المشاركة",
    desc: "إضافة الجهات أو الإدارات أو المرشحين وتوزيع الأدوار والمسؤوليات.",
  },
  {
    title: "إعداد الملفات",
    desc: "كتابة الإجابات ورفع الأدلة وتنظيم الملفات المؤسسية داخل النظام.",
  },
  {
    title: "المراجعة الداخلية",
    desc: "فحص الجودة واكتشاف الفجوات وإرجاع الملفات للتحسين عند الحاجة.",
  },
  {
    title: "التقييم والتحكيم",
    desc: "توزيع المشاركات على المقيمين وإدارة التقييم الفردي والمعايرة واعتماد النتائج.",
  },
  {
    title: "النتائج والتحسين",
    desc: "إصدار التقارير، تحليل الأداء، وبناء خطط التحسين للدورات القادمة.",
  },
];

const aiItems = [
  "تحسين جودة ملفات الترشح واقتراح صياغات أكثر احترافية",
  "تحليل الأدلة وربطها بالمعايير واكتشاف نقاط الضعف",
  "مساعدة المقيمين في تلخيص الملفات وتحليل المحتوى",
  "تحليل الفجوات المؤسسية وإصدار تقارير تنفيذية ذكية",
  "اقتراح خطط تحسين وإجراءات قابلة للتنفيذ بعد النتائج",
  "دعم الإدارة العليا برؤى ولوحات تحليلية أكثر عمقًا",
];

const benefits = [
  {
    title: "منصة واحدة",
    desc: "إدارة منظومات التميز والجوائز المؤسسية عبر بيئة رقمية موحدة بدل الملفات المتفرقة.",
    icon: Layers3,
  },
  {
    title: "تسريع العمل",
    desc: "تقليل الجهد الإداري المرتبط بإعداد الملفات وتجميع الأدلة ومتابعة الفرق.",
    icon: Workflow,
  },
  {
    title: "تحسين الجودة",
    desc: "رفع جودة المشاركات وجودة التقييم عبر أدوات مراجعة وتحليل ذكية.",
    icon: CheckCircle2,
  },
  {
    title: "قرار مبني على البيانات",
    desc: "تقارير ولوحات قيادة تدعم الإدارة العليا في فهم الأداء المؤسسي واتخاذ القرار.",
    icon: BarChart3,
  },
  {
    title: "ذكاء اصطناعي متقدم",
    desc: "قدرات AI عملية تساعد في الكتابة والتحليل والتقييم والتحسين.",
    icon: Bot,
  },
  {
    title: "حوكمة وأمان",
    desc: "إدارة صلاحيات، سجلات تدقيق، وضبط دخول يضمن خصوصية البيانات ونزاهة الجائزة.",
    icon: ShieldCheck,
  },
];

const navItems = ["المنصة", "الاستخدامات", "الذكاء الاصطناعي", "الفوائد", "طلب عرض"];

function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 lg:text-5xl">{title}</h2>
      {desc ? <p className="mt-5 text-lg leading-8 text-slate-600">{desc}</p> : null}
    </div>
  );
}

export default function SmartExcellenceLandingPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 shadow-lg shadow-amber-500/20">
              <Sparkles className="h-5 w-5 text-slate-950" />
            </div>
            <div>
              <div className="text-base font-bold text-white">منصة التميز الذكي</div>
              <div className="text-xs text-slate-400">Smart Excellence Platform</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className="rounded-2xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">
              طلب عرض للنظام
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.24),_transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e293b_100%)] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute -left-16 bottom-10 h-80 w-80 rounded-full bg-amber-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-amber-200">
                <Sparkles className="h-4 w-4" />
                منصة رقمية متكاملة لإدارة منظومات التميز والجوائز الحكومية
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-6xl">
                منصة التميز الذكي
                <span className="mt-4 block bg-gradient-tol from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  لإدارة منظومات التميز والجوائز الحكومية
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 lg:text-xl">
                منصة تساعد الجهات الحكومية على إدارة برامج التميز المؤسسي والجوائز المختلفة، وتنظيم ملفات الترشح والأدلة المؤسسية، وتنفيذ عمليات التقييم والتحكيم، عبر نظام واحد مدعوم بالذكاء الاصطناعي.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-amber-400 px-7 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:scale-[1.02]">
                  طلب عرض للنظام
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10">
                  مشاهدة الفيديو التنفيذي
                </button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {awardPrograms.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-amber-300/20 via-yellow-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[28px] bg-slate-950 p-5 shadow-inner">
                  <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3">
                    <div>
                      <div className="text-sm text-slate-400">لوحة قيادة تنفيذية</div>
                      <div className="mt-1 text-xl font-bold text-white">منظومة التميز في منصة واحدة</div>
                    </div>
                    <div className="rounded-xl bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">جَاهِزَة</div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["الجوائز النشطة", "12"],
                      ["الجهات المشاركة", "36"],
                      ["الملفات الجاهزة للتحكيم", "24"],
                      ["معدل الجاهزية", "%78"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <div className="text-sm text-slate-400">{label}</div>
                        <div className="mt-3 text-3xl font-black text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-lg font-bold text-white">رحلة الجائزة</div>
                      <div className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">Workflow</div>
                    </div>
                    <div className="space-y-2">
                      {workflow.slice(0, 4).map((step, index) => (
                        <div key={step.title} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-3 py-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">
                            {index + 1}
                          </div>
                          <div className="text-sm text-slate-200">{step.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <div className="flex items-center gap-2 text-amber-300">
                        <Bot className="h-4 w-4" />
                        <span className="text-sm font-medium">ذكاء اصطناعي</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        تحليل الملفات، دعم التقييم، واستخراج الفجوات والتوصيات.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <div className="flex items-center gap-2 text-sky-300">
                        <BarChart3 className="h-4 w-4" />
                        <span className="text-sm font-medium">تحليلات ونتائج</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        لوحات تنفيذية وتقارير جاهزة تدعم متخذي القرار.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="التحديات"
          title="التحديات التي تواجه الجهات الحكومية في إدارة منظومات التميز"
          desc="تعدد الجوائز والمعايير، تشتت الأدلة المؤسسية، الاعتماد على ملفات متفرقة، وصعوبة متابعة التقييم والتحكيم… كلها تحديات تجعل إدارة منظومة التميز أكثر تعقيدًا من اللازم."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "ملفات متفرقة",
              desc: "اعتماد كبير على ملفات Word وExcel والبريد الإلكتروني في إدارة الترشح والأدلة.",
              icon: FileText,
            },
            {
              title: "أدلة غير منظمة",
              desc: "صعوبة تصنيف الأدلة وربطها بالمعايير واستخدامها في أكثر من مشاركة أو جائزة.",
              icon: Layers3,
            },
            {
              title: "تعدد المسارات",
              desc: "إدارة أكثر من جائزة داخلية وخارجية وبرنامج تميز في وقت واحد يرهق المؤسسة.",
              icon: Workflow,
            },
            {
              title: "ضعف الرؤية التحليلية",
              desc: "محدودية التقارير وضعف القدرة على تحليل الجاهزية والفجوات واتجاهات الأداء.",
              icon: BarChart3,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="نماذج الاستخدام"
            title="منصة واحدة تدعم جميع نماذج استخدام الجوائز"
            desc="صُممت منصة التميز الذكي لتخدم برامج التميز الحكومية، والجوائز الداخلية، والمشاركة في الجوائز الخارجية، والجوائز التي تنظمها الجهات الحكومية."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-700 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
              كيف يعمل النظام
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 lg:text-5xl">إدارة دورة حياة الجائزة بالكامل</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              يتيح النظام إدارة دورة حياة الجائزة بالكامل من إنشاء الجائزة وحتى النتائج وخطط التحسين، ضمن مسار واضح ومنظم يخدم جميع الأدوار داخل المؤسسة.
            </p>

            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-950">{step.title}</div>
                    <div className="mt-1 leading-7 text-slate-600">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">فيديو النظام</div>
                  <div className="text-2xl font-bold text-slate-950">العرض التنفيذي</div>
                </div>
                <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">Executive Video</div>
              </div>
              <div className="flex aspect-video items-center justify-center rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-center text-white shadow-inner">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl">▶</div>
                  <div className="mt-4 text-lg font-bold">مشاهدة الفيديو التنفيذي للنظام</div>
                  <div className="mt-2 text-sm text-slate-300">يمكن استبدال هذا القسم بالفيديو الفعلي أو فيديوهات الحقيبة الترويجية</div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">ذكاء اصطناعي</div>
                  <div className="text-2xl font-bold">قدرات AI داخل المنصة</div>
                </div>
              </div>
              <div className="space-y-3">
                {aiItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <div className="text-slate-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="القيمة المؤسسية"
            title="القيمة التي تقدمها المنصة للجهات الحكومية"
            desc="من خلال منصة التميز الذكي، تستطيع الجهة الحكومية تحويل منظومة التميز من جهود متفرقة إلى منظومة رقمية متكاملة تدعم الابتكار والتحسين المستمر واتخاذ القرار المبني على البيانات."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl lg:p-10">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-amber-200">
                ملائم للقطاع الحكومي
              </div>
              <h3 className="mt-5 text-3xl font-bold lg:text-4xl">مصمم لبرامج التميز والجوائز المؤسسية الحكومية</h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                بُنيت منصة التميز الذكي لتخدم الواقع الفعلي للجهات الحكومية وبرامج التميز، سواء كانت الجهة مالكة للجائزة، أو مطلقة لجائزة داخلية، أو مشاركة في جوائز خارجية، أو منظِّمة لجائزة تدعو الآخرين للمشاركة فيها.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "برامج التميز الحكومية",
                  "الجوائز الداخلية",
                  "الأوسمة الفردية",
                  "التقييم والتحكيم",
                  "لوحات القيادة",
                  "خطط التحسين",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <div className="mb-4 text-sm font-medium text-amber-700">طلب عرض للنظام</div>
              <h3 className="text-3xl font-bold text-slate-950">ابدأ في إدارة منظومة التميز المؤسسي بطريقة أكثر احترافية</h3>
              <p className="mt-4 leading-8 text-slate-600">
                اطلب عرضًا للنظام للتعرّف على كيفية تطبيق منصة التميز الذكي داخل مؤسستك، وكيف يمكن مواءمتها مع الجوائز والبرامج التي تديرها أو تشارك فيها.
              </p>

              <div className="mt-8 space-y-4">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="اسم الجهة"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="الاسم"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="البريد الإلكتروني"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="نبذة مختصرة عن نوع الجائزة أو البرنامج الذي ترغب بإدارته"
                />
              </div>

              <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:scale-[1.02]">
                إرسال طلب العرض
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© منصة التميز الذكي — جميع الحقوق محفوظة</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-slate-900">المنصة</a>
            <a href="#" className="transition hover:text-slate-900">الحلول</a>
            <a href="#" className="transition hover:text-slate-900">الذكاء الاصطناعي</a>
            <a href="#" className="transition hover:text-slate-900">طلب عرض</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
