import generateCMPTests from '../playwright/runner';

generateCMPTests('gravito', [
    'https://www.gp.se/',
    'https://www.hitta.se/',
    'https://www.suomi24.fi/',
    'https://www.foreca.fi/',
    'https://www.veikkaus.fi/',
    'https://www.apu.fi/',
]);

// popup is not shown in the US
generateCMPTests('gravito', ['https://www.flightradar24.com/45.96,14.66/6'], {
    skipRegions: ['US'],
});
