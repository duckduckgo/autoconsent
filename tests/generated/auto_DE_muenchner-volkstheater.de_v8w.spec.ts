import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_muenchner-volkstheater.de_v8w', ['https://www.muenchner-volkstheater.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
