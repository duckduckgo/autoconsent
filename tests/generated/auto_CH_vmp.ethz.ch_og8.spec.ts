import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vmp.ethz.ch_og8', ['https://vmp.ethz.ch/en/about-the-vmp/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
