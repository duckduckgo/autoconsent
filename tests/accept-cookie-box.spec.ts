import generateCMPTests from '../playwright/runner';

generateCMPTests('accept-cookie-box', [
    'https://pdfcoffee.com/',
    'https://slideblast.com/',
    'https://adoc.pub/',
    'https://ebin.pub/',
    'https://dokumen.pub/',
]);
