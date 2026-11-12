import generateCMPTests from '../playwright/runner';

generateCMPTests('wbd-consent-modal', ['https://www.discoveryplus.com/', 'https://www.hbomax.com/'], {
    // US shows a single-button terms notice instead
    skipRegions: ['US'],
});
