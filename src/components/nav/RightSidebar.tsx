import { Sidebar } from "./Sidebar";
import { SidebarNav } from "./SidebarNav";

type Props = {};

export const RightSidebar = ({}: Props) => {
  return (
    <Sidebar>
      <SidebarNav />
    </Sidebar>
  );
};
