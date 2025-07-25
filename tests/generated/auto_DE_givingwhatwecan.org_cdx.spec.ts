import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_givingwhatwecan.org_cdx', ['https://www.givingwhatwecan.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
