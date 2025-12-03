import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_hub.jw.org_urj',
    [
        'https://login.jw.org/username?postLoginUri=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dhub.jw.org%252Fidentity%26redirect_uri%3Dhttps%253A%252F%252Fhub.jw.org%252Fidentity%252Fsignin-oidc%26response_type%3Did_token%26scope%3Dopenid%2520profile%26response_mode%3Dform_post%26nonce%3D638938762020950235.Nzk4MDI5MGEtZjUxMi00MmU2LWJhNGEtOThiOTMxM2M1YzE0MTk4Yjc0NWYtYjI2Yi00NDE5LThjNGEtYjk0NGYzNTQ4ZWI2%26client-request-id%3D7a911f3f-4810-41b5-a077-9cd0dbac892e%26state%3DCfDJ8LHC74jGlAJHuGHxKr8cy0KSW3FE8bOE3PR0DjrG_AYb4taUW-1VUfrPRNAmez1L9baXa2uqRc0J3f6aGam-ZQkDrtrdQhCFz6QpW6CZyqT_7O1wMWVRxf8olpVLOzINk5iJERu83WNcd5TYryNJYJdTaCjozdhkHXU-Y_sBLxlVvb8uLWlECXczFL_q5Sbs22T5FyZ3ofkueNrM6E0fdg9l52n3Dx2ICJTbOTSr0SRj2rYLnYGE5csH0WeA-H_rOeUD5dBsEAokkppkrFrJRwwj9_7YFc9WDctYMM04IphP5jREXHXJNJwrhlaGicfLhqvrlm1uE3gHpGtFExhL4CXadOuetJ1LQRqqP3_u97yvHBgHrt9Yw0w126YONvA_YTYMRYESBpmK3_4P-6VWr_E4QYMIVXGJ2CAznmf9306Y0GoTP0S0xOG6TqN0E9kKBFh4GOZtyLrQptOu6uILuFc%26x-client-SKU%3DID_NET9_0%26x-client-ver%3D8.7.0.0',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
