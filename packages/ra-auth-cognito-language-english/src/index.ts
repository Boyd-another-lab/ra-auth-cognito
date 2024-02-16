import type { CognitoTranslationMessages } from 'ra-auth-cognito';

export const raAuthCognitoEnglishMessages: CognitoTranslationMessages = {
    ra: {
        auth: {
            cognito: {
                mfa: {
                    totp: {
                        association_helper_text:
                            'Enter the verification code generated by your authenticator app to complete the association.',
                        association_label: 'Verification code',
                        association_required:
                            'Two steps authentication is required, please associate an authenticator to your account by scanning the QR code or entering the secret key.',
                        copy_totp_url_to_clipboard:
                            'Copy secret key to clipboard',
                        label: 'Verification code from your authenticator app',
                    },
                },
            },
        },
    },
};