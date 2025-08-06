import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_staatstheater-nuernberg.de_cpe', ['https://www.staatstheater-nuernberg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
