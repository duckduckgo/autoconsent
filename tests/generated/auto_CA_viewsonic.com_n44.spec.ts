import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_viewsonic.com_n44', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
