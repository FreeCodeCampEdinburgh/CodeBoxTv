function Main({ children }) {
  return (
    <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <section className="mt-10">{children}</section>
    </main>
  );
}

export default Main;
