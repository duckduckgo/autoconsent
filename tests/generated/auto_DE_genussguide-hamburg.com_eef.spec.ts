import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_genussguide-hamburg.com_eef', ['https://www.genussguide-hamburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
