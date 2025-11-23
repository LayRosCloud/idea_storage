import clsx from "clsx";

export function ViewSection({ className }: { className?: string }) {
  return (
    <section className={clsx("mx-auto max-w-7xl", className)}>
      <img
        src="/mock-image.png"
        className="mx-auto block border-32 rounded-4xl"
        alt="mock"
      />
    </section>
  );
}
