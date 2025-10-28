import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lucidchart.com_p33', ['https://www.lucidchart.com/pages'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
