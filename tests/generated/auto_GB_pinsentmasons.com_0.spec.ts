import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pinsentmasons.com_0', ['https://www.pinsentmasons.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
