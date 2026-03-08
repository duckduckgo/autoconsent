import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forum.oldhammer.org_cow', ['https://forum.oldhammer.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
