import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.automobiledimension.com_kwd', ['https://de.automobiledimension.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
