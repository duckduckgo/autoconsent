import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rheinwerk-verlag.de_mao', ['https://www.rheinwerk-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
