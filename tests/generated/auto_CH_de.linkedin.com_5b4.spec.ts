import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.linkedin.com_5b4', ['https://de.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
