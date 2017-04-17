import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { HarborLibraryModule } from 'harbor-angular';
import { InfoComponent } from './info/info.component';
import { SERVICE_CONFIG, IServiceConfig } from 'harbor-angular';

export const endpoints: IServiceConfig = {
    systemInfoEndpoint: "/api/systeminfo"
};

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING,
        HarborLibraryModule.forRoot({
            config: {
                provide: SERVICE_CONFIG,
                useValue: endpoints
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
