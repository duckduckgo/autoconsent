import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parcelmonkey.co.uk_0', ['https://www.parcelmonkey.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
