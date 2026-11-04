import generateCMPTests from '../playwright/runner';

generateCMPTests('phenom', [
    'https://colescareers.com.au/',
    'https://jobs.bell.ca/',
    'https://careers.chop.edu/',
    'https://www.yelp.careers/',
    'https://jobs.pwc.de/',
]);
