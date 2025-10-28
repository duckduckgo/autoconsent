import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lucidchart.com_jz8', ['https://www.lucidchart.com/pages'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
