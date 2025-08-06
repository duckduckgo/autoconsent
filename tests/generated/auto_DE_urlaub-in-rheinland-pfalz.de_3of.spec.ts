import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_urlaub-in-rheinland-pfalz.de_3of', ['https://www.urlaub-in-rheinland-pfalz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
