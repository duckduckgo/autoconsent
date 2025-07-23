import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_photobox.co.uk_r6m', ['https://www.photobox.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
