import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stadtwerk.winterthur.ch_u6g', ['https://stadtwerk.winterthur.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
