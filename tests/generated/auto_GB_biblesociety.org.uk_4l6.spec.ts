import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_biblesociety.org.uk_4l6', ['https://www.biblesociety.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
