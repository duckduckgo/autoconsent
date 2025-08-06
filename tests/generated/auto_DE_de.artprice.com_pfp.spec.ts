import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.artprice.com_pfp', ['https://de.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
