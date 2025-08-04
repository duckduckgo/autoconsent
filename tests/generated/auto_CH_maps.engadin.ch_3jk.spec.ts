import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maps.engadin.ch_3jk', ['https://www.maps.engadin.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
