import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_redgifs-creators.com_5s6', ['https://redgifs-creators.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
