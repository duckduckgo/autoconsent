import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundeswehrkarriere.de_d64', ['https://www.bundeswehrkarriere.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
