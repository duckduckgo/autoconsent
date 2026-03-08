import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_artandchristianity.org_818', ['https://artandchristianity.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
