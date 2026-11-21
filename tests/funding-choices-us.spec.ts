import generateCMPTests from '../playwright/runner';

generateCMPTests('funding-choices-us', ['http://8003.quizwinz.com/', 'http://8001.quizwinz.com/'], {
    onlyRegions: ['US'],
});
