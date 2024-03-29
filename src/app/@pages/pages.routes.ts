import type { Routes } from "@angular/router";

export const Pages = {
  Playground: {
    Path: "playground",
    Title: "Playground",
  },
} as const;

const routes: Routes = [
  {
    path: Pages.Playground.Path,
    title: Pages.Playground.Title,
    loadComponent: () => import("./playground/playground.cmp").then((x) => x.PlaygroundCmp),
  },
];

export const getPagesRoutes = () => {
  return routes
}
