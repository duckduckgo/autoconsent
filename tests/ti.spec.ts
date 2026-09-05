import generateCMPTests from '../playwright/runner';

// https://www.ti-mathnspired.com/ also uses this CMP, but serves a certificate for education.ti.com
generateCMPTests('ti-consent', ['https://education.ti.com/', 'https://t3-italia.it/', 'https://t3oesterreich.at/']);
