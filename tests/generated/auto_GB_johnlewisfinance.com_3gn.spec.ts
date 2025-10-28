import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_johnlewisfinance.com_3gn', ['https://www.johnlewisfinance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
