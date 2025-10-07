import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_staatstheater-nuernberg.de_fcs', ['https://www.staatstheater-nuernberg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
