import React from 'react';

// script from https://github.com/gaearon/overreacted.io/blob/master/src/html.js
// found here: https://dev.to/amaltapalov/how-i-set-dark-mode-for-gatsby-website-4ni0

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {    
            window.__onThemeChange = function() {};                
            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            var preferredTheme
            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
          })()
        `,
      },
    }),
  ]);
};