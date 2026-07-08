import generateCMPTests from '../playwright/runner';

generateCMPTests('tagconcierge', [
    'https://theonion.com/',
    'https://annalee.com/',
    'https://allthingsbusiness.co.uk/',
    'https://marketingwithvladimir.com/',
    'https://www.phonedroid.fr/',
]);
