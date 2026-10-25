import generateCMPTests from '../playwright/runner';

generateCMPTests('bootstrap-cookie-consent-settings', [
    'https://www.unipa.it/',
    'https://www.likeevent.it/',
    'https://www.uplink.it/',
    'https://www.unioncamere.gov.it/',
    'https://www.rainers-sports.com/',
]);

// The site reloads right after the choice is saved, before the self-test can run
generateCMPTests('bootstrap-cookie-consent-settings', ['https://www.xxl.fr/'], {
    testSelfTest: false,
});
