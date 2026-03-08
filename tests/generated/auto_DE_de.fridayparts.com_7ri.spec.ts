import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.fridayparts.com_7ri', ['https://de.fridayparts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
