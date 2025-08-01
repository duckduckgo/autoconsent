import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissgoldshop.ch_54x', ['https://www.swissgoldshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
