import generateCMPTests from '../playwright/runner';

generateCMPTests('ecoprivacy', [
    'https://www.rentri.gov.it/',
    'https://www.fgas.it/',
    'https://www.registroaee.it/',
    'https://www.renap.gov.it/',
]);
