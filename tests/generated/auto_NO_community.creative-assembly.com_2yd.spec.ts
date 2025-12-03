import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_community.creative-assembly.com_2yd', ['https://community.creative-assembly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
