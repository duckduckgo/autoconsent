import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_europeancorrespondent.com_qu1', ['https://europeancorrespondent.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
