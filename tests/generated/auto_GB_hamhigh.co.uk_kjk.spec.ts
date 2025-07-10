import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hamhigh.co.uk_kjk', ['https://www.hamhigh.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
