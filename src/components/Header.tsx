export default function Header() {
  return (
    <header className="flex items-center justify-between pt-8 pb-15">
      <div className="font-sans text-[21px] font-semibold">Portofolio.</div> {/* TODO */}
      <nav className="flex gap-7">
        <a href="#work" className="text-sm text-muted transition hover:text-ink">Work</a>
        <a href="#experience" className="text-sm text-muted transition hover:text-ink">Experience</a>
        <a href="#contact" className="text-sm text-muted transition hover:text-ink">Contact</a>
      </nav>
    </header>
  );
}