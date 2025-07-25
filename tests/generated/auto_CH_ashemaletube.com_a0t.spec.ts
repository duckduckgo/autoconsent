import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ashemaletube.com_a0t', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
