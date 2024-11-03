import React from "react";
import { getFooterCopy, getFullYear } from '../utils/utils';1
import UserContext from '../App/AppContext';

export default function Footer () {
  return (
    <>
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
    <UserContext.Consumer>
      {
        (userContext) => {
          if (userContext.user.isLoggedIn) {
            return <p data-testid='contactUsParagraph'>Contact us</p>
          }
        }
      }
    </UserContext.Consumer>
    </>
  );
}
