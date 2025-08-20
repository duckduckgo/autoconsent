import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vmp.ethz.ch_6um', ['https://vmp.ethz.ch/en/about-the-vmp/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
