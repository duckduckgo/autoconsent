import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_spark.worldstrides.com_7j4', ['https://spark.worldstrides.com/log-in'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
