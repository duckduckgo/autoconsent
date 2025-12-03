import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundeswehrkarriere.de_g9g', ['https://www.bundeswehrkarriere.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
