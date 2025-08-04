import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ashemaletube.com_6ir', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
