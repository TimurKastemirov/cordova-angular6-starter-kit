import {Component, OnInit} from '@angular/core';

declare var device;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'my-app';

    ngOnInit() {
        document.addEventListener("deviceready", function () {
            alert(device.platform); // alert platform when you launch app on device
        }, false);
    }
}
