import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hochschulsport.hu-berlin.de_4js', ['https://www.hochschulsport.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
