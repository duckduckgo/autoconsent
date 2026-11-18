import generateCMPTests from '../playwright/runner';

generateCMPTests('bootstrap-cookie-alert', [
    'https://visa.mofa.gov.sa/',
    'https://www.lsu.edu/',
    'https://www.mandela.ac.za/',
    'https://www.nvi.gov.tr/',
    'https://www.valdosta.edu/',
]);
