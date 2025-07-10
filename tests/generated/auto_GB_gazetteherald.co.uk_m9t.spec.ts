import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gazetteherald.co.uk_m9t', ['https://www.gazetteherald.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
