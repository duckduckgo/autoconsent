import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_elecalculator.com_gzo', ['https://elecalculator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
