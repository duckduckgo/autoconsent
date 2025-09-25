import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_norumbegainn.com_g2y', ['https://norumbegainn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
