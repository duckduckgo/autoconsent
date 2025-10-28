import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lucidchart.com_ufo', ['https://www.lucidchart.com/pages'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
