import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutschesgesundheitsportal.de_ns2', ['https://www.deutschesgesundheitsportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
