import generateCMPTests from '../playwright/runner';

generateCMPTests('unicity', [
    'https://www.heartuk.org.uk/',
    'https://www.adeptdesign.co.uk/',
    'https://www.lichfield-cathedral.org/',
    'https://www.makingspace.co.uk/',
    'https://www.oaa-anaes.ac.uk/',
]);
