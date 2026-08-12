import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";
import { SmartImage } from "@/components/site/smart-image";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  align = "center",
}: PageHeaderProps) {
  return (
    <section className="relative flex h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          src={image}
          alt=""
          priority
          fill
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Stronger bottom gradient for text */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>
      <div className="container-px relative mx-auto w-full max-w-7xl pb-16 sm:pb-20">
        <Reveal
          className={cn(
            "flex flex-col gap-5",
            align === "center"
              ? "items-center text-center"
              : "items-start text-left",
          )}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-6 bg-accent/70" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
