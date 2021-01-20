import React, { useEffect } from 'react';

export default function View(props) {
    const { name, history, host } = props;

    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        // If the View's script has already been downloaded, then render the View directly
        if (document.getElementById(scriptId)) {
            renderView();
            return;
        }

        // Fetch the View's js script file and append it to head
        fetch(`${host}/asset-manifest.json`)
          .then(res => res.json())
          .then(({ files }) => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.crossOrigin = '';
            script.src = `${host}${files['main.js']}`;
            console.log('script', script);
            script.onload = renderView;
            document.head.appendChild(script);
          });
    });

    const renderView = () => {
        const renderFunction = `render${name}`;
        window[`${renderFunction}`](`${name}-container`, history);
    };

    return (
        <main id={`${name}-container`} />
    )
};