import generateCMPTests from '../playwright/runner';

generateCMPTests('mercedes-benz-cmm', [
    'https://www.mercedes-benz.pl/',
    'https://www.mercedes-benz.de/',
    'https://www.mercedes-benz.co.uk/',
]);

// variant without a reject button: opt out via settings
generateCMPTests('mercedes-benz-cmm', ['https://www.mercedes-benz.co.jp/', 'https://www.mercedes-benz.com.au/']);
