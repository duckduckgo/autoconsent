import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_foliage-factory.com_6zm', ['https://foliage-factory.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
