export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Dr. Subhasis Banerjee. All rights reserved.</p>
    </footer>
  );
}
