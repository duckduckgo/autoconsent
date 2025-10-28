import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rs.linkedin.com_09f', ['https://rs.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
