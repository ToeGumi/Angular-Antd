import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { EditOutline, CheckOutline, CloseOutline, DeleteOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [EditOutline, CheckOutline, CloseOutline, DeleteOutline ];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzListModule,
    NzCheckboxModule,
    NzGridModule,
    NzPopconfirmModule,
    NzIconModule.forRoot(icons)
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
