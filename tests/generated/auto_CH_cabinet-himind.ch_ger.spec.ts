import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cabinet-himind.ch_ger', ['https://cabinet-himind.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
