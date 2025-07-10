import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thepinknews.com_41n', ['https://www.thepinknews.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
