import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windowspower.de_07n', ['https://www.windowspower.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
