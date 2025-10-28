import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rewi.hu-berlin.de_p5t', ['https://www.rewi.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
