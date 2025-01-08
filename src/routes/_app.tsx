import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useAuth, useRequireVerified } from '../lib/auth';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  const { logout } = useAuth();
  const user = useRequireVerified();

  if (!user) return null;

  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Outlet />
      </div>
    </SidebarInset>
  </SidebarProvider>
  );
}

 

// <div className="min-h-screen bg-gray-50">
// <nav className="bg-white shadow">
//   <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//     <span className="font-semibold">Welcome, {user.email}</span>
//     <button
//       onClick={logout}
//       className="px-4 py-2 bg-red-500 text-white rounded"
//     >
//       Logout
//     </button>
//   </div>
// </nav>
// <main className="max-w-7xl mx-auto px-4 py-6">
//   <Outlet />
// </main>
// </div>