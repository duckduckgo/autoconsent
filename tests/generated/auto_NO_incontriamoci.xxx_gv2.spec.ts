import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_incontriamoci.xxx_gv2', ['https://incontriamoci.xxx/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
