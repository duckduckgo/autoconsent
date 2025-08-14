import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tourenplaner-rheinland-pfalz.de_zgf', ['https://www.tourenplaner-rheinland-pfalz.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
