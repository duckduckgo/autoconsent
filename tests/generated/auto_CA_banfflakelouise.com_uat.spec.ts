import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_banfflakelouise.com_uat', ['https://www.banfflakelouise.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
