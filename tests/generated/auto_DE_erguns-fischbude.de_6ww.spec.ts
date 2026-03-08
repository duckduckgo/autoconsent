import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erguns-fischbude.de_6ww', ['https://erguns-fischbude.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
