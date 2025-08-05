import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_guide.michelin.com_cwr', ['https://guide.michelin.com/ch/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
