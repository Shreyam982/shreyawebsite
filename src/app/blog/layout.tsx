export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-indigo-50/30 dark:bg-indigo-950/20 min-h-screen">
      {children}
    </div>
  );
} 