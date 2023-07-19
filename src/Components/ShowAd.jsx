import React, { useEffect, useState } from 'react';

const ShowAd = () => {
  const atOptions = {
    key: '0f6c7522b6b40573e3a4e1322a24b17e',
    format: 'iframe',
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.profitabledisplaynetwork.com/0f6c7522b6b40573e3a4e1322a24b17e/invoke.js`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default ShowAd;
