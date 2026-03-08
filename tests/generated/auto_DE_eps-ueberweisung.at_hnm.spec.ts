import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eps-ueberweisung.at_hnm', ['https://eps-ueberweisung.at/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
