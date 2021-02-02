import Footer from "../shared/footer";
import Header from "../shared/header";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />
      <main className="flex-auto">
        { children }
      </main>
      <Footer className="flex-none" />
    </div>
  )
}