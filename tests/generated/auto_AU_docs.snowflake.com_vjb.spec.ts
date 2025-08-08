import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.snowflake.com_vjb', ['https://docs.snowflake.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
