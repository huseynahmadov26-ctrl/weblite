import { SectionHeading } from "./SectionHeading";

const steps = [
{
n: "01",
t: "Kəşf və Analiz",
d: "Biznesinizi, hədəf auditoriyanızı və məqsədlərinizi analiz edərək layihənin əsasını qururuq.",
},
{
n: "02",
t: "UI/UX Dizayn",
d: "Brendinizə uyğun müasir, intuitiv və istifadəçi yönümlü interfeyslər hazırlayırıq.",
},
{
n: "03",
t: "İnkişaf",
d: "Saytınızı sürətli, təhlükəsiz və gələcək inkişaf üçün uyğun texnologiyalarla hazırlayırıq.",
},
{
n: "04",
t: "Test və Optimizasiya",
d: "Bütün cihazlarda yoxlama aparır, performansı optimallaşdırır və son detalları tamamlayırıq.",
},
{
n: "05",
t: "Yayım və Dəstək",
d: "Saytı yayımlayır, texniki dəstək göstərir və uzunmüddətli əməkdaşlığı davam etdiririk.",
},
];


export function Process() {
	return (
		<section id="process" className="relative py-28">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeading eyebrow="Proses" title="İdeyadan yayıma qədər düşünülmüş və rahat yol" />

				<div className="relative mt-16">
					<div className="absolute left-0 right-0 top-7 hidden md:block h-px bg-gradient-to-r from-transparent via-border to-transparent" />

					<div className="grid gap-8 md:grid-cols-5">
						{steps.map((s) => (
							<div className="relative" key={s.n}>
								<div className="relative z-10 mx-auto md:mx-0 grid h-14 w-14 place-items-center rounded-full glass-strong ring-glow">
									<span className="font-display text-lg text-gradient-red">{s.n}</span>
								</div>
								<h3 className="mt-5 text-base font-medium">{s.t}</h3>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
