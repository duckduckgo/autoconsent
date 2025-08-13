import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_windowspower.de_3iu', ['https://www.windowspower.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
