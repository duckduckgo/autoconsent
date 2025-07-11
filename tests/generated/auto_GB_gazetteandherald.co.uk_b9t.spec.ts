import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gazetteandherald.co.uk_b9t', ['https://www.gazetteandherald.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
