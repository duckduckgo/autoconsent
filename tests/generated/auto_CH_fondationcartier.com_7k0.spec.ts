import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondationcartier.com_7k0', ['https://www.fondationcartier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
