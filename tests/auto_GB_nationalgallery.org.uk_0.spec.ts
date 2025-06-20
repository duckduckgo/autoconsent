import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_nationalgallery.org.uk_0', ['https://www.nationalgallery.org.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
