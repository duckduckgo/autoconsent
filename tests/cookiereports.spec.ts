import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiereports', [
    'https://www.obsbygg.no/',
    'https://www.coop.no/',
    'https://www.visa.co.uk/',
    'https://www.carefreedental.com/',
]);

// reject is the first banner button on these sites, and they show no banner to US visitors
generateCMPTests('cookiereports', ['https://www.storesupply.com/', 'https://www.jumeirah.com/en'], {
    skipRegions: ['US'],
});
