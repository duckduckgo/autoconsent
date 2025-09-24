import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dequeuniversity.com_thg', ['https://dequeuniversity.com/color-contrast'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
