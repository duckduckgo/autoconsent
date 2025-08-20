import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_viewsonic.com_9um', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
