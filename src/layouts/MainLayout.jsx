import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-obsidian text-ivory font-body">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
