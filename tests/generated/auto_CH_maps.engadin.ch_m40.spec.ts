import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maps.engadin.ch_m40', ['https://www.maps.engadin.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
