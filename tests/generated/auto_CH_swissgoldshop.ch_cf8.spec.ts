import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissgoldshop.ch_cf8', ['https://www.swissgoldshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
