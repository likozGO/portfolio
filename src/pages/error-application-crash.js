import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Button from '../components/button';
import Container from '../components/container';
import CrashImage from '../components/crash-image';
import Section from '../components/section';
import { TELEGRAM_LINK } from '../constants/contacts';
import { ERRORS_DATA } from '../translations/translation-keys';

import './error-application-crash.scss';

const redirectToTelegram = () => window.open(TELEGRAM_LINK);

const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};

function ErrorApplicationCrash({ errorTranslations }) {
  const { t } = useTranslation();
  const { error, fix_errors, contact_developer } = t(...errorTranslations);
  return (
    <Section classNames="application-crash">
      <Container>
        <h1 className="error-code">{error}</h1>
        <CrashImage />
        <Button
          type="secondary"
          onClickHandler={clearLocalStorage}
          label={fix_errors}
        />
        <Button
          type="tertiary"
          onClickHandler={redirectToTelegram}
          label={contact_developer}
        />
      </Container>
    </Section>
  );
}

function mapStateToProperties() {
  return {
    errorTranslations: [ERRORS_DATA.APPLICATION_CRASH, { returnObjects: true }],
  };
}

export default connect(mapStateToProperties)(ErrorApplicationCrash);
