import generateCMPTests from '../playwright/runner';

generateCMPTests('pubfactory', [
    'https://www.elibrary.imf.org/display/book/9798400255632/CH002.xml',
    'https://www.ajtmh.org/',
    'https://journals.ametsoc.org/',
    'https://www.elgaronline.com/',
    'https://journals.humankinetics.com/',
    'https://thejns.org/',
]);
