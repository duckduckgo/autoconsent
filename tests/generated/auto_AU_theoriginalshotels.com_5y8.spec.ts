import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_theoriginalshotels.com_5y8', ['https://www.theoriginalshotels.com/en/hotels/la-villa-vicha'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
