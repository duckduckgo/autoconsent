import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parcelforce.com_93a', ['https://www.parcelforce.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
