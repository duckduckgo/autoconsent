import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_li.linkedin.com_dq8', ['https://li.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
