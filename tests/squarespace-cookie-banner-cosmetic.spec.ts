import generateCMPTests from '../playwright/runner';

// Squarespace banners configured without an opt-out or "Manage cookies" control:
// the single CTA writes consent cookies, so the banner is only hidden.
generateCMPTests('squarespace-cookie-banner-cosmetic', [
    'https://backpackies.com/bags/harber-london-commuter',
    'https://www.seeturtles.org/',
    'https://www.piratechristian.com/',
]);
