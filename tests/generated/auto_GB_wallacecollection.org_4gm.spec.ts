import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wallacecollection.org_4gm', ['https://www.wallacecollection.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
