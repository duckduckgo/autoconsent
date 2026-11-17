import generateCMPTests from '../playwright/runner';

generateCMPTests('somerset-council', [
    'https://www.somerset.gov.uk/',
    'https://www.somersetwaste.gov.uk/',
    'https://www.visitsouthsomerset.com/',
    'https://healthysomerset.co.uk/',
]);
