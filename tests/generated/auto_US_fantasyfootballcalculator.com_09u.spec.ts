import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fantasyfootballcalculator.com_09u', ['https://fantasyfootballcalculator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
