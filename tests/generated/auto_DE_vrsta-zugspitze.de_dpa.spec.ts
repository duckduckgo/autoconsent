import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrsta-zugspitze.de_dpa', ['https://www.vrsta-zugspitze.de/privatkunden.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
