import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Complianz optin',
    [
        // 'https://stetson.com/',
        'https://www.aktienfinder.net/',
        // Joomla GDPR plugin with category checkboxes
        'https://www.spreewald-hotel-stern-werben.de/',
        'https://oblinger.at/',
    ],
    {},
);
