import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'didomi',
    [
        'https://nothing.tech/',
        'https://www.planet.fr/',
        'http://www.allocine.fr/',
        'https://www.boursorama.com/',
        'https://www.theoriginalshotels.com/en/hotels/la-villa-vicha',
        'https://support.didomi.io/set-up-the-absence-of-interaction-as-a-cookie-denial',
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
