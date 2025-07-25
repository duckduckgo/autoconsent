import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saint-bernard.ch_uk3', ['https://www.saint-bernard.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
