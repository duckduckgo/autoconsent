import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cosmos.leartesstudios.com_vpa', ['https://cosmos.leartesstudios.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
