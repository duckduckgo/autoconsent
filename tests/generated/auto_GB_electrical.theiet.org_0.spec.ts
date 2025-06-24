import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_electrical.theiet.org_0', ['https://electrical.theiet.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
