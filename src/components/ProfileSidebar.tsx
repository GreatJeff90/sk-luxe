interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function ProfileSidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  const tabs = ["Personal Information", "My Orders", "Manage Address", "Payment Method", "Password Manager", "Logout"];

  return (
    <aside className="md:col-span-1 space-y-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => tab === "Logout" ? onLogout() : setActiveTab(tab)}
          className={`block w-full text-left py-4 px-4 text-sm uppercase tracking-widest transition-colors ${
            activeTab === tab 
            ? "bg-brand-green text-brand-cream font-bold" 
            : "text-brand-green hover:bg-brand-green/5"
          }`}
        >
          {tab}
        </button>
      ))}
    </aside>
  );
}