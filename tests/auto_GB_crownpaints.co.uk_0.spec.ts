import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_crownpaints.co.uk_0', ['https://crownpaints.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
