import generateCMPTests from '../playwright/runner';

generateCMPTests('nuxt-cookie-manager', [
    // Accept / Decline / Customize buttons
    'https://www.koelner-philharmonie.de/',
    'https://www.thalia-theater.de/',
    'https://www.festspielhaus.de/',
    // Accept all / Save settings with category toggles
    'https://www.alteoper.de/de/',
    'https://konzerthaus.at/de',
]);
