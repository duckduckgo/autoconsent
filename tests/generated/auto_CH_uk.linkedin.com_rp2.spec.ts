import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_uk.linkedin.com_rp2', ['https://uk.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
