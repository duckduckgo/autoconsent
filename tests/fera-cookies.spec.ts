import generateCMPTests from '../playwright/runner';

generateCMPTests('fera-cookies', [
    'https://planthealthportal.defra.gov.uk/trade/imports/imports-from-the-eu/bcpscps/faqs-for-animal-and-plant-health-agencies-apha-operational-hours/',
    'https://www.cropmonitor.co.uk/',
]);
