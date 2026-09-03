import generateCMPTests from '../playwright/runner';

// medicaldaily.com is one of the few Sirdata sites that also shows the dialog to US visitors.
generateCMPTests('Sirdata', ['https://www.comment-economiser.fr/', 'https://www.dafont.com/', 'https://www.medicaldaily.com/']);
