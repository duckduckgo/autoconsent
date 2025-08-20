import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_banfflakelouise.com_4eg', ['https://www.banfflakelouise.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
