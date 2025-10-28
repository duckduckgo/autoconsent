import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lucidchart.com_p7u', ['https://www.lucidchart.com/pages'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
