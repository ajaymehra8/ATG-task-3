import {createTheme} from '@mui/material';

export const customTheme=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:"#90caf9",
            light:"#e3f2fd",
            dark:"#42a5f5"

        },
        background:{
            paper:"#151515",
            default:'rgb(0,0,0,.96)'
        },
        

    }
});