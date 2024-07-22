import React from 'react';
import {
  Icon,
  MultiPurposeButton,
  ThemeType,
} from '@genflowly/react-assets/dist';
import styles from './AuthForm.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export enum AuthType {
  Login = 'Login',
  SignUp = 'SignUp',
}
type AuthFormProps = {
  logoIconSrc: string;
  logoIconAlt: string;
  type: AuthType;
  disclaimer: string;
};

const AuthForm: React.FC<AuthFormProps> = ({
  logoIconSrc,
  logoIconAlt,
  type,
  disclaimer,
}) => {
  const { t } = useTranslation();
  return (
    <main className={styles.loginContainer}>
      <div
        className={styles.loginCard}
        role="form"
        aria-labelledby="login-title"
      >
        <header className={styles.loginHeader}>
          <Icon
            iconSrc={logoIconSrc}
            iconAlt={logoIconAlt}
            theme={ThemeType.DARK}
          />
          <div className={styles.textContainer}>
            <h1 id="login-title" className={styles.loginTitle}>
              {type === AuthType.Login
                ? t('Welcome')
                : t('Create your account')}
            </h1>
            <p className={styles.loginSubtitle}>
              {type === AuthType.Login
                ? t('Sign into your account')
                : t('Sign up to Continue')}
            </p>
          </div>
        </header>
        <div className={styles.loginContent}>
          <div className={styles.loginOptions}>
            <MultiPurposeButton
              className={styles.lwaButton}
              aria-label="Sign up with Apple"
            >
              {type === AuthType.Login
                ? t('Sign in with Apple')
                : t('Sign up with Apple')}
            </MultiPurposeButton>
            <MultiPurposeButton
              className={styles.lwgButton}
              aria-label="Sign up with Google"
            >
              {type === AuthType.Login
                ? t('Sign in with Google')
                : t('Sign up with Google')}
            </MultiPurposeButton>
          </div>
          <p className={styles.loginSignInPrompt}>
            {type === AuthType.Login && (
              <>
                <span> {t("Don't have an account?")} </span>{' '}
                <Link to="/signup" className={styles.loginLink}>
                  {t('Sign up')}{' '}
                </Link>{' '}
                <span />
              </>
            )}
            {type === AuthType.SignUp && (
              <>
                {' '}
                <span> {t('Already have an account?')} </span>{' '}
                <Link to="/login" className={styles.loginLink}>
                  {' '}
                  {t('Sign in')}
                </Link>{' '}
                <span />
              </>
            )}
          </p>
          <p className={styles.loginDisclaimer}>{t(disclaimer)}</p>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
