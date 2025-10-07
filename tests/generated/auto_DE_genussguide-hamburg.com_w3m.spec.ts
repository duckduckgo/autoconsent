import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_genussguide-hamburg.com_w3m', ['https://www.genussguide-hamburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
