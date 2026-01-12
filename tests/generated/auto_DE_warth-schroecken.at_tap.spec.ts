import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_warth-schroecken.at_tap', ['https://www.warth-schroecken.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
