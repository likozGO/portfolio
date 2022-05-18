import React from 'react';
import { IconContext } from 'react-icons';
import Tooltip from './tooltip';

const ProfileSocial = ({
  social, greeting, name, position,
}) => {
  const DOWNLOAD_CV = 'Download CV';

  return (
    <>
      <div className="profile-title">
        <span>{greeting}</span>
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
      <ul className="profile-social-links">
        {
        social.map((a, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            {/* eslint-disable eqeqeq */}
            <Tooltip
              text={a.text === DOWNLOAD_CV ? a.text : a.link}
              delayHide={a.text !== DOWNLOAD_CV ? 150 : 0}
              clickable={a.text !== DOWNLOAD_CV}
              Elem={
                (a.text === DOWNLOAD_CV
                  ? (
                    <a download href={a.link}>
                      <IconContext.Provider value={{ className: 'social-icon' }}>
                        {a.icon()}
                      </IconContext.Provider>
                    </a>
                  )
                  : (
                    <span href={a.link}>
                      <IconContext.Provider value={{ className: 'social-icon' }}>
                        {a.icon()}
                      </IconContext.Provider>
                    </span>
                  )
                )
              }
            />
          </li>
        ))
      }
      </ul>
    </>
  );
};

export default ProfileSocial;