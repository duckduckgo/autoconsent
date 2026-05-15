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
        // Self-test is disabled because some sites (e.g. planet.fr) navigate away
        // after clicking the disagree button, which destroys the Didomi state.
        testSelfTest: false,
        skipRegions: ['US'],
    },
);

// US-specific Didomi sites where the CMP runs in CCPA/CPRA mode.
// In CCPA mode there is no explicit reject button, so the rule relies on the
// Didomi JS API (EVAL_DIDOMI_OPT_OUT) instead of clicking a DOM element.
generateCMPTests('didomi', ['https://newrepublic.com/article/162247/andreas-malm-blow-up-pipeline-climate-direct-action'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
