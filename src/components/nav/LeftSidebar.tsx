import { Sidebar } from "./Sidebar";
import { SidebarNav } from "./SidebarNav";

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
