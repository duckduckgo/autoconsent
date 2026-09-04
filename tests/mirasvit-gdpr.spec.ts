import generateCMPTests from '../playwright/runner';

// www.wallmur.com uses the same CMP, but only serves the bar to consumer IPs, so it cannot be
// asserted here: from a datacenter IP the store consents on the visitor's behalf and shows nothing.
generateCMPTests(
    'mirasvit-gdpr',
    [
        // Hyvä storefront: the bar has no reject, so the opt-out goes through the settings dialog
        'https://kunstgrasdirect.nl/',
        'https://tapijtenlaminaatdirect.nl/',
        // Luma storefront, settings dialog built by Magento's modal widget
        'https://www.ilio.com/',
        'https://www.autopflege-shop.de/',
        // has a "Decline" button in the bar, so the settings dialog is not needed
        'https://www.lamps-on-line.com/',
    ],
    {},
);
