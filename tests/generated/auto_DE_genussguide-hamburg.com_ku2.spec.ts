import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_genussguide-hamburg.com_ku2', ['https://www.genussguide-hamburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
