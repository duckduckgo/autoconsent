import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondationcartier.com_cob', ['https://www.fondationcartier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
