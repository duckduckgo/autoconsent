import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_discoverscottishgardens.org_6km', ['https://discoverscottishgardens.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
