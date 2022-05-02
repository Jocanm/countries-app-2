// import original module declarations
import 'styled-components';
import { breakPoints } from '../styles/themes';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        body:string;
        text:string;
        element:string;
        px:string;
        input:string;
        breakPoints: typeof breakPoints
    }
}