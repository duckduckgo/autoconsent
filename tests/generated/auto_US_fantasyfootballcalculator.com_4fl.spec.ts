import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fantasyfootballcalculator.com_4fl', ['https://fantasyfootballcalculator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
