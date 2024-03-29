import type { Routes } from "@angular/router";
import { Pages, getPagesRoutes } from "./@pages/pages.routes";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: Pages.Playground.Path,
  },
  ...getPagesRoutes(),
];
