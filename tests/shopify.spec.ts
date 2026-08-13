import generateCMPTests from '../playwright/runner';

generateCMPTests('shopify', [
    'https://store.leviton.com/collections/smart-load-center',
    'https://snaprevise.co.uk/',
    'https://www.blacklimba.com/',
    'https://www.mcgeeandco.com/products/calvert-brass-tissue-box-cover',
]);
