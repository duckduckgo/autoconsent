import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.elibrary.imf.org/display/book/9798400255632/CH002.xml',
    'https://www.elgaronline.com/display/book/9781800888708/9781800888708.xml',
    'https://www.manchesterhive.com/',
];

generateCMPTests('pubfactory', urls, { mobile: true });
generateCMPTests('pubfactory', urls, { mobile: false });
