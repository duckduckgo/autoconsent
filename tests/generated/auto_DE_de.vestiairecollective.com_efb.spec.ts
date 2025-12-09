import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.vestiairecollective.com_efb', ['https://us.vestiairecollective.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
