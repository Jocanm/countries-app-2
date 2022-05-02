export const getLocalTheme = ():boolean => {
    const theme = localStorage.getItem('isDarkMode') || 'false';
    const parsedTheme = Boolean(JSON.parse(theme));
    return parsedTheme;
}