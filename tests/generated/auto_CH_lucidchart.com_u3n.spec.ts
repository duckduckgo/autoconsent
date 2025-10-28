import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lucidchart.com_u3n', ['https://www.lucidchart.com/pages'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
