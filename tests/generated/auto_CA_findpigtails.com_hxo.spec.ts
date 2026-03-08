import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_findpigtails.com_hxo', ['https://findpigtails.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
