export default function BentoGrid() {
  return (
    <section className="w-full rounded-2xl bg-white/40 px-2 py-4 shadow-sm sm:px-6 md:px-4 lg:px-6">
      <div className="relative z-10 grid grid-cols-6 gap-3">
        {/* First card */}
        <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 sm:col-span-3 lg:col-span-2">
          Work in progress 1
        </div>

        {/* Second card */}
        <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 sm:col-span-3 lg:col-span-2">
          2
        </div>

        {/* Third card */}
        <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 sm:col-span-3 lg:col-span-2">
          <div>3</div>
        </div>

        {/* Forth card */}
        <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 lg:col-span-3">
          <div className="grid sm:grid-cols-2">4</div>
        </div>

        {/* Fifth card */}
        <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 lg:col-span-3">
          <div className="grid h-full sm:grid-cols-2">5</div>
        </div>
      </div>
    </section>
  );
}
