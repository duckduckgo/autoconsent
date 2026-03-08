import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dndcauldron.com_86d', ['https://dndcauldron.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
