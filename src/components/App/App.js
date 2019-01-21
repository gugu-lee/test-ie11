import React from 'react';
//import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Page from 'wix-style-react/Page';
import Text from 'wix-style-react/Text';


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }



  render() {
    return (

        <div>
          <section style={{ 'padding-top': '80px;' }}>
            <Page
              
              gradientClassName="background-gradient"
            >
              <Page.Header
                onBackClicked={() => {}}
                subtitle=""
                title="My APP"
              />
              <Page.Content>
                Welcom to My APP!
              </Page.Content>
            </Page>
          </section>
        </div>

    );
  }
}

function text(children, style) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        background: '#F0F4F7',
        ...style,
      }}
    >
      <Text>{children}</Text>
    </div>
  );
}

export default translate()(App);
