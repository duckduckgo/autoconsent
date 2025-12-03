import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ashemaletube.com_yc0', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
