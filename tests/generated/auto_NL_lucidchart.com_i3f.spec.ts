import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lucidchart.com_i3f', ['https://www.lucidchart.com/pages'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
