import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_aa.com_hxc', ['https://www.aa.com/homePage.do?locale=en_CA'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
