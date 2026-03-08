import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_espaceclient.axa.fr_089',
    [
        'https://connect.axa.fr/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fespaceclient.axa.fr%252Funified-authentication-redirect.html%26state%3D9557fa94-5fd7-4d63-8dc6-fcb934ce943d%25253Bhttps%25253A%25252F%25252Fespaceclient.axa.fr%25252Funified-authentication-redirect.html%26client_id%3D9f0d7c72-d863-4c91-9a7b-8caf1373a3aa%26scope%3Dprofile%2520phone%2520email%2520openid%2520api-client%2520https%253A%252F%252Fconnect.axa.fr%252FindividualOrProfessional.all%2520https%253A%252F%252Fconnect.axa.fr%252FcollectiveHealth.all%2520https%253A%252F%252Fconnect.axa.fr%252Fbank.all%2520axa-fr-salary-saving%2520eb-fr-collective%2520fr-gfp%2520https%253A%252F%252Fconnect.axa.fr%252Fauth%252Fpema%2520offline_access%2520fr-outremer-insurance%26acr_values%3Durn%253Aaxafrance%253Aloa%253Atrusted-device',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
