import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout(props) {
  const { children, active, setActive } = props;

  return (
    <div className="relative  bg-bg">
      <Header className="absolute top-0 z-50" />

      {children}

      <Footer />
    </div>
  );
}
