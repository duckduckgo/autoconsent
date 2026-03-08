import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_csllibrary.org_jx0', ['https://csllibrary.org/iguana/www.main.cls'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
