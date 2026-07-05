interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function ProfileSidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  const tabs = [
    "Personal Information", 
    "My Orders", 
    "Manage Address", 
    "Payment Method", 
    "Password Manager", 
    "Logout"
  ];

  const handleTabClick = (tab: string) => {
    if (tab === "Logout") {
      onLogout();
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <aside className="md:col-span-1 space-y-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`block w-full text-left py-4 px-4 text-sm uppercase tracking-widest transition-all duration-200 ${
              isActive 
                ? "bg-brand-green text-brand-cream font-bold" 
                : "text-brand-green hover:bg-brand-green/5 hover:text-brand-green"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </aside>
  );
}

