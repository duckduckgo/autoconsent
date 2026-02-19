import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_regioentsorgung.de_9sv', ['https://regioentsorgung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
