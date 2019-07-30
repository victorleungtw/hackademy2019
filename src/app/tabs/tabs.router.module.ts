import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: '../discover/discover.module#DiscoverPageModule'
          }
        ]
      },
      {
        path: 'bookings',
        children: [
          {
            path: '',
            loadChildren: '../bookings/bookings.module#BookingsPageModule'
          }
        ]
      },
      {
        path: 'rewards',
        children: [
          {
            path: '',
            loadChildren: '../rewards/rewards.module#RewardsPageModule'
          }
        ]
      },
      {
        path: 'forum',
        children: [
          {
            path: '',
            loadChildren: '../forum/forum.module#ForumPageModule'
          }
        ]
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren: '../me/me.module#MePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
