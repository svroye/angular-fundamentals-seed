// compile in the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// own created module
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);