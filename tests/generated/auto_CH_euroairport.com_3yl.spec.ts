import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_euroairport.com_3yl', ['https://www.euroairport.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
