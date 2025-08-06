import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stabilo-sanitaer.de_0ed', ['https://www.stabilo-sanitaer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
