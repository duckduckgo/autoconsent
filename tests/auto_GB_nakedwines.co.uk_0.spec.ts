import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_nakedwines.co.uk_0', ['https://www.nakedwines.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
