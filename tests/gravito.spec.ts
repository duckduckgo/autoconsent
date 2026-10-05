import generateCMPTests from '../playwright/runner';

generateCMPTests('gravito', ['https://www.hitta.se/', 'https://www.apu.fi/', 'https://www.suomi24.fi/']);

// popup is not shown in the US
generateCMPTests('gravito', ['https://www.flightradar24.com/45.96,14.66/6', 'https://www.foreca.fi/'], {
    skipRegions: ['US'],
});
