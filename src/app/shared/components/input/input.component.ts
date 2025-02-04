import { NgIf } from '@angular/common';
import {
  Component,
  Input, // 讓父元件傳遞資料
  forwardRef, // 用於解決 useExisting 的循環依賴問題
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ControlValueAccessor, // 介面，讓元件與 Angular 表單整合
  NG_VALUE_ACCESSOR, // NG_VALUE_ACCESSOR 讓 Angular 表單識別這個元件
} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatInput, MatFormField, MatError, NgIf],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // 讓這個元件被 Angular 表單當作原生 input 使用
      useExisting: forwardRef(() => InputComponent),
      multi: true, // Multiple form controls can be registered under NG_VALUE_ACCESSOR.
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // @Input() Properties (接收外部輸入)
  @Input() label = ''; // 標籤名稱
  @Input() type = 'text'; // 預設為 text
  @Input() placeholder = ''; // 預設 placeholder
  @Input() required = false; // 必填設定
  @Input() control!: FormControl; // Expecting a FormControl instance

  value = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  // This receives the value from Angular Forms and updates the component.
  writeValue(value: string): void {
    console.log('input value', value);
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // 點擊或離開
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  get hasError() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
}
