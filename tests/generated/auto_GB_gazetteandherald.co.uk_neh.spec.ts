import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gazetteandherald.co.uk_neh', ['https://www.gazetteandherald.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
