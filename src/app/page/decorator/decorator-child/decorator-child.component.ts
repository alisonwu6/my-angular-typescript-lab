import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorator-child',
  imports: [],
  templateUrl: './decorator-child.component.html',
  styleUrl: './decorator-child.component.scss',
})
export class DecoratorChildComponent {
  @Input() receiveMessage: string = '';

  // either one can get displayMessageAliasFromIndex data from parent
  // @Input() parentMessage: string = '';
  @Input('parentMessage') aliasMessage: string = '';
}

/** @Input decorator

Q2: The second question can you pass primitive and object types with input decorator?

    You can pass both primitive and object types using input decorator.
    Angular automatically tracks changes to primitive types because they are passed by value.
    However, for object types, including the array of objects, angular detects changes only when the reference to the object changes, that is, its memory in the location.

Q3: Third question can you alias the input property name?

    Yes, you can alias the input property name by providing a string inside the decorator.
    This allows the parent component to use a different name when binding to the property.

    Here, the parent component will use the alias parent message to bind to receive message property in the child component.

*/
