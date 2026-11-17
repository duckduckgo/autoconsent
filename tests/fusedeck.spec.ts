import generateCMPTests from '../playwright/runner';

generateCMPTests('fusedeck', [
    'https://zahnarztzentrum.ch/',
    'https://www.fhgr.ch/',
    'https://www.energie-experten.ch/',
    'https://cptr.com/',
    'https://www.dawa.ch/',
]);
