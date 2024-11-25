export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav>Nav</nav>
      {children}
    </section>
  );
}
