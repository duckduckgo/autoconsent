import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_windowspower.de_jnw', ['https://www.windowspower.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
