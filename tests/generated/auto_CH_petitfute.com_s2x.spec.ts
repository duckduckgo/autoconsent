import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_petitfute.com_s2x', ['https://www.petitfute.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
