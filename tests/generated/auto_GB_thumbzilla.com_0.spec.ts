import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thumbzilla.com_0', ['https://www.thumbzilla.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
