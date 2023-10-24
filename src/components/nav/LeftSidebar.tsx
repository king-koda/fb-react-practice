import { Sidebar } from "@/components/nav/Sidebar";
import { SidebarNav } from "@/components/nav/SidebarNav";

type Props = {};

export const LeftSidebar = ({}: Props) => {
  return (
    <>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
    </>
  );
};
