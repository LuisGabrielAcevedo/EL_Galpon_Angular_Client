import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from 'src/app/services/token.service';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StreamsRoutingModule { }
