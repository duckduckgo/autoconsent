import generateCMPTests from '../playwright/runner';

generateCMPTests('polisen-se', ['https://polisen.se/', 'https://polismuseet.se/', 'https://tidningensvenskpolis.se/'], {});
