import type { Meta, StoryObj } from "@storybook/react-vite";
import SideMenu from "@/components/layout/SideMenu";

const meta: Meta<typeof SideMenu> = {
  component: SideMenu,
  title: "System/Button",
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}