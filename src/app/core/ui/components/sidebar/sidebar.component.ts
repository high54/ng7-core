import { Component, OnInit, OnDestroy } from '@angular/core';
// Rxjs
import { Subscription } from 'rxjs';
//Services
import { AuthService } from 'src/app/core/auth/services';
// Models
import { User } from 'src/app/core/auth/models/user.interface';

@Component({
    selector: 'ui-sidebar',
    styleUrls: ['sidebar.component.scss'],
    templateUrl: 'sidebar.component.html',
})
export class UiSidebarComponent implements OnInit, OnDestroy {
    user: User;
    authSubscription: Subscription;
    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authSubscription = this.authService.currentUser.subscribe((user) => {
            this.user = user;
        });
    }
    ngOnDestroy() {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    }
}
