import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_korsch-verlag.de_67e', ['https://www.korsch-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
