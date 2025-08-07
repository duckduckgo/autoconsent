import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ashemaletube.com_5hd', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
