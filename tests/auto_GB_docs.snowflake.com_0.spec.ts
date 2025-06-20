import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_docs.snowflake.com_0', ['https://docs.snowflake.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
