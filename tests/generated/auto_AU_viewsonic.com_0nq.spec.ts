import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_viewsonic.com_0nq', ['https://www.viewsonic.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
