import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_acoustic-solid.com_040', ['https://acoustic-solid.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
