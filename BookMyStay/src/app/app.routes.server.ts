import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'customer/hotel/:id/rooms',
    renderMode: RenderMode.Server
  },
  {
    path: 'customer/hotel/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
