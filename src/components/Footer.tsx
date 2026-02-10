const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-bold text-primary-foreground">
          Tania<span className="text-secondary">.</span>
        </p>
        <p className="font-body text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Tania Tahseen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
