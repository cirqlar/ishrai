import Header from "../shared/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        { children }
      </main>
    </>
  )
}