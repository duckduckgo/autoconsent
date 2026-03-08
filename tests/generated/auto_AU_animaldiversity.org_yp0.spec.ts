import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_animaldiversity.org_yp0', ['https://animaldiversity.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
