import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ksa.ch_x7t', ['https://www.ksa.ch/de/kantonsspital-aarau/aufenthalt-und-besuch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
