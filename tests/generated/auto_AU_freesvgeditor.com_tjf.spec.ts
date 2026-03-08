import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_freesvgeditor.com_tjf', ['https://freesvgeditor.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
