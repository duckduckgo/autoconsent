import generateCMPTests from '../playwright/runner';

generateCMPTests('kixell', [
    'https://www.tousergo.com/',
    'https://www.ocarat.com/',
    'https://www.direct-signaletique.com/',
    'https://www.eurobillards.com/',
    'https://www.trampolin-technik.de/',
]);

// No "continue without accepting" link: reject via the preferences view.
// The site reloads itself ~2s after the first load; if autoconsent acts before that, the popup is handled twice.
generateCMPTests('kixell', ['https://www.vis-express.fr/']);
