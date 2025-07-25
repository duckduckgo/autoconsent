import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pharma-gdd.com_kyv', ['https://www.pharma-gdd.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
