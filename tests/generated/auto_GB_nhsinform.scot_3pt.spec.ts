import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nhsinform.scot_3pt', ['https://www.nhsinform.scot/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
