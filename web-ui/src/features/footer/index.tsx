import clsx from "clsx";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx("bg-background border", className)}>
      <p className="text-center py-10 text-gray-500">
        Protobin - чтобы перестать всё переделывать и начать выпускать.
      </p>
    </footer>
  );
}
