import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.wiki7.org_kj7', ['https://de.wiki7.org/wiki/27_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
