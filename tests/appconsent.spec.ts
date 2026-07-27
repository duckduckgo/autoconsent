import generateCMPTests from '../playwright/runner';

generateCMPTests('appconsent', [
    // Forces GDPR globally (popup shows in all regions):
    'https://www.bestwordlist.com/',
    // Shows the popup in GDPR regions only:
    'https://www.touslesdrivers.com/',
    'https://www.superencontre.com/',
]);
