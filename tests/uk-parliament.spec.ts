import generateCMPTests from '../playwright/runner';

generateCMPTests('uk-parliament', [
    'https://members.parliament.uk/',
    'https://committees.parliament.uk/',
    'https://bills.parliament.uk/',
    'https://www.parliament.uk/',
]);
