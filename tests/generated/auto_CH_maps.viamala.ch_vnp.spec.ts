import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maps.viamala.ch_vnp', ['https://www.maps.viamala.ch/de/reisefuehrer/schweiz/viamala/1607085/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
