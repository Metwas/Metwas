import { FormsModule, NgForm } from '@angular/forms';
import { Component, signal } from '@angular/core';

@Component( {
       selector: 'home-root',
       imports: [ FormsModule ],
       templateUrl: './home.html',
       styleUrl: './home.scss'
} )
export class Home 
{
       protected readonly clock = signal( '' );
       public name: string = "";

       /**
        * Runs after the view has been initialized
        * 
        * @public
        */
       public ngAfterViewInit(): void
       {
              setInterval( () =>
              {
                     this.clock.set( formatTime() );
              }, 1000 );
       }

       public onSubmitForm( form: NgForm, event: SubmitEvent )
       {
              console.log( "Submitted" );
       }
}

const formatTime = (): string =>
{
       const now: Date = new Date();
       const hours: string = ( "0" + now.getHours() ).slice( -2 );
       const minutes: string = ( "0" + now.getMinutes() ).slice( -2 );
       const seconds: string = ( "0" + now.getSeconds() ).slice( -2 );

       return `${hours}:${minutes}:${seconds}`;
};
