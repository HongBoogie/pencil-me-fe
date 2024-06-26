import GroupFooter from '@/app/group/components/GroupFooter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-200">
      <main className="flex-1">{children}</main>
      <GroupFooter />
    </div>
  );
}
