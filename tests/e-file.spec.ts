import generateCMPTests from '../playwright/runner';

generateCMPTests('e-file', [
    'https://www.e-pity.pl/',
    'https://www.e-file.pl/',
    'https://www.fillup.pl/',
    'https://e-zus.pl/',
    'https://jpk.info.pl/',
]);
