
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)

// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)


// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

export const lightTheme = {
    body:'hsl(0, 0%, 98%)',
    text:'hsl(200, 15%, 8%)',
    element:'hsl(0, 0%, 100%)',
    input:'hsl(0, 0%, 52%)',
}

export const darkTheme = {
    body:'hsl(207, 26%, 17%)',
    text:'hsl(0, 0%, 100%)',
    element:'hsl(209, 23%, 22%)',
    input:'hsl(0, 0%, 100%)',
}

export const breakPoints = {
    sm:'640px',
    md:'768px',
    lg:'1024px',
    xl:'1280px',
    '2xl':'1440px',
    '3xl':'1600px',
}

export const globalTheme = {
    px:'4rem',
    breakPoints
}