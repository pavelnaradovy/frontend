export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section>
          <div
            style={{ height: "100px", width: "50px", background: "red" }}
          ></div>
          {children}
        </section>
      </body>
    </html>
  );
}
