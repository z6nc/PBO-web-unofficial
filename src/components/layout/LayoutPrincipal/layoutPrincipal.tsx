export function LayoutPrincipal({ children }: { children: React.ReactNode }) {
    return (
      <main className="w-full  lg:max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-2 py-4">
        {children}
      </main>
    );
}