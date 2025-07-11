import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gazetteherald.co.uk_vh7', ['https://www.gazetteherald.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
