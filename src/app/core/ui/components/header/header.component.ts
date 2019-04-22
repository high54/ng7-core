import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services';
import { User } from 'src/app/core/auth/models/user.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ui-header',
    styleUrls: ['header.component.scss'],
    templateUrl: 'header.component.html',
})
export class UiHeaderComponent implements OnInit, OnDestroy {
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
