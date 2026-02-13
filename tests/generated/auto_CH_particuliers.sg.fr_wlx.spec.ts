import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_particuliers.sg.fr_wlx', ['https://particuliers.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
