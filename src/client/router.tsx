import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { BaseLayout } from "./layout/base";
import { ContainerLayout } from "./layout/container";
import { SplitLayout } from "./layout/split";
import { CreateArticlePage } from "./pages/article/new";
import { HomePage } from "./pages/home";
import { NotificationsPage } from "./pages/notifications";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <BaseLayout>
              <Outlet />
            </BaseLayout>
          }
        >
          {/* page split layout screens */}
          <Route
            element={
              <SplitLayout>
                <Outlet />
              </SplitLayout>
            }
          >
            <Route path="/" index element={<HomePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
          </Route>

          {/* single page layout screens */}
          <Route
            element={
              <ContainerLayout>
                <Outlet />
              </ContainerLayout>
            }
          >
            <Route path="/new" element={<CreateArticlePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
