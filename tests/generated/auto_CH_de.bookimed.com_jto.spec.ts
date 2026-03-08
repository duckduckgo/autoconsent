import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.bookimed.com_jto', ['https://de.bookimed.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
