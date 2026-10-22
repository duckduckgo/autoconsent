import generateCMPTests from '../playwright/runner';

generateCMPTests('dpgmedia-nl', ['https://www.autoweek.nl/', 'https://www.parool.nl/', 'https://www.hln.be/'], {});
