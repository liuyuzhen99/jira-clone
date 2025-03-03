"use client";

import { UseGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export const WorkspaceSwitcher = () => {
  const { data } = UseGetWorkspaces();
  return <div>{data?.total}</div>;
};
