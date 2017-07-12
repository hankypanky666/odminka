import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'statistics', data: { key: 'statistics' },
        children: [
          {
            path: 'charts',
            loadChildren: 'app/dashboard/components/statistics/charts/charts.module#ChartsModule',
            data: { key: 'charts' }
          },
          {
            path: 'progress-bars',
            loadChildren: 'app/dashboard/components/statistics/progress-bars/progress-bars.module#ProgressBarsModule',
            data: { key: 'progress-bars' }
          }
        ],
      },
      {
        path: 'forms', data: { key: 'forms' },
        children: [
          {
            path: 'form-element',
            loadChildren: 'app/dashboard/components/forms/form-element/form-element.module#FormElementModule',
            data: { key: 'form-element' }
          },
          {
            path: 'form-wizard',
            loadChildren: 'app/dashboard/components/forms/form-wizard/form-wizard.module#FormWizardModule',
            data: { key: 'form-wizard' }
          }
        ]
      },
      {
        path: 'ui-elements', data: { key: 'ui-elements' },
        children: [
          {
            path: 'typography',
            loadChildren: 'app/dashboard/components/ui-elements/typography/typography.module#TypographyModule',
            data: { key: 'typography' }
          },
          {
            path: 'buttons',
            loadChildren: 'app/dashboard/components/ui-elements/buttons/buttons.module#ButtonsModule',
            data: { key: 'buttons' }
          },
          {
            path: 'icons',
            loadChildren: 'app/dashboard/components/ui-elements/icons/icons.module#IconsModule',
            data: { key: 'icons' }
          },
          {
            path: 'grid',
            loadChildren: 'app/dashboard/components/ui-elements/grid/grid.module#GridModule',
            data: { key: 'grid' }
          },
          {
            path: 'modals',
            loadChildren: 'app/dashboard/components/ui-elements/modals/modals.module#ModalsModule',
            data: { key: 'modals' }
          }
        ]
      },
      {
        path: 'maps', data: { key: 'maps' },
        children: [
          {
            path: 'google-maps',
            loadChildren: 'app/dashboard/components/maps/google-maps/google-maps.module#GoogleMapsModule',
            data: { key: 'google-maps' }
          },
          {
            path: 'leaflet-maps',
            loadChildren: 'app/dashboard/components/maps/leaflet-maps/leaflet-maps.module#LeafletMapsModule',
            data: { key: 'leaflet-maps' }
          },
          {
            path: 'bubble-maps',
            loadChildren: 'app/dashboard/components/maps/bubble-maps/bubble-maps.module#BubbleMapsModule',
            data: { key: 'bubble-maps' }
          },
          {
            path: 'line-maps',
            loadChildren: 'app/dashboard/components/maps/line-maps/line-maps.module#LineMapsModule',
            data: { key: 'line-maps' }
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
