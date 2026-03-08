import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_flirt.badische-zeitung.de_rv7', ['https://flirt.badische-zeitung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
