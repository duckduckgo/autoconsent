import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biobistro.bsb.ch_6oh', ['https://biobistro.bsb.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
