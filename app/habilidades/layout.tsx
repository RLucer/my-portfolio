export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center text-center gap-4 py-8 md:py-10">
      <div className="">
        {children}
      </div>
    </section>
  );
}
