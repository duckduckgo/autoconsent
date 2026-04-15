import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'didomi',
    [
        'https://www.visitcalifornia.com/',
        'https://www.planet.fr/',
        'http://www.allocine.fr/',
        'https://www.boursorama.com/',
        'https://www.leparisien.fr/',
        'https://www.elconfidencial.com/',
    ],
    {
        testOptIn: true,
        testSelfTest: false,
        skipRegions: ['US'],
    },
);

generateCMPTests('didomi', ['https://us.sandro-paris.com/en/womens/thanksgiving-event/see-all/'], {
    testSelfTest: false,
});
