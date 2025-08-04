import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ashemaletube.com_ely', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
