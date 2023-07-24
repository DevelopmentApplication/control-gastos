export const MESSAGE = {
  NOTIFICATION: {
    GENERIC: {
      ERROR: {
        TITLE: 'Sorry, an error has occurred',
        MESSAGE: 'Please try again later.',
      },
    },
    AUTH: {
      SIGNIN: {
        AUTHENTICATED_SUCCESS: {
          MESSAGE: 'Authenticated successfully.',
        },
        NOT_FOUND_ACCOUNT: {
          TITLE: 'Oops, there was a problem.',
          MESSAGE: "We couldn't find this account, please retry.",
        },
      },
      SIGNUP: {
        REGISTER_SUCCESS: {
          MESSAGE: 'Account created successfully',
        },
        ACCOUNT_ALREADY: {
          TITLE: 'Oops, there was a problem.',
          MESSAGE: 'Email is already registered, try logging in.',
        },
      },
      FORGGOTTEN: {
        SUCCESS: {
          MESSAGE: 'Your user password has been reset.',
        },
        ERROR_SEND_LINK: {
          TITLE: 'Oops, there was a problem.',
          MESSAGE: 'Have a error whale send email',
        },
      },
      RESETPASS: {
        SUCCESS: {
          TITLE: '',
          MESSAGE: 'Your password have change success.',
        },
        ERROR_CHANGE_PASS: {
          TITLE: 'Oops, there was a problem.',
          MESSAGE: "We couldn't change your password, please retry.",
        },
      },
      EMAILCONFIRM: {
        RESEND_EMAIL: {
          TITLE: 'The confirmation email has been successfully sent',
          MESSAGE:
            'Please check your inbox and click on the link in the email.',
        },
        ALREADY_CONFIRM: {
          TITLE: 'Oops, there was a problem.',
          MESSAGE: 'User already confirm',
        },
      },
      GENERIC_ERROR_AUTH: {
        TITLE: 'Oops, there was a problem.',
        MESSAGE: 'Sorry, an error has occurred while auth account.',
      },
    },
    USER: {
      EMAIL_NOT_FOUND: {
        TITLE: '',
        MESSAGE: 'User not found',
      },
    },
  },
  PAGES: {
    VALIDATION_EMAIL: {
      TITLE: 'Account created successfully',
      MESSAGE: 'We sent you a link to your email to validate your account.',
    },
  },
};

export const PATH = {
  DASHBOARD: 'dashboard',
  HOME: 'home',
  PROFILE: 'profile',
  AUTH: 'auth',
  SIGNIN: 'signIn',
  SIGNUP: 'signUp',
  TERMS: 'terms',
  PRIVACY: 'privacy',
};

export const UTIL = {
  TIME_OUT: 10,
  TIME_LIMIT_RESEND_CODE_MINUTE: 3,
  TIME_LIMIT_RESEND_CODE_SECOND: 0,
};

export const PASSWORD_VALIDATION = {
  MIN_LENGTH: 4,
  MAX_LENGTH: 16,
};
