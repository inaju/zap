'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [count, setCount] = React.useState(1);
  const [fileCounter, setFileCounter] = React.useState(null);
  const container = React.useRef<HTMLDivElement>(null);
  const elem: any = container.current;
  // const elem: any = document.getElementById('fullScreen');

  function openFullscreen() {
    if (elem !== null) {
      if (elem?.requestFullscreen) {
        elem?.requestFullscreen();
      } else if (elem?.webkitRequestFullscreen) {
        /* Safari */
        elem?.webkitRequestFullscreen();
      } else if (elem?.msRequestFullscreen) {
        /* IE11 */
        elem?.msRequestFullscreen();
      }
    }
  }

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // if (count <= fileCounter) {
    if (count <= 14) {
      intervalId = setInterval(() => {
        setCount(count + 1);
      }, 5000);
    } else {
      setCount(1);
    }
    return () => clearInterval(intervalId);
  }, [count, fileCounter]);

  // React.useEffect(() => {
  //   fetch(`/api/run-python`).catch((error) => console.error(error));
  // }, []);

  // React.useEffect(() => {
  //   fetch(`/api/file-counter`)
  //     .then((response) => response.json())
  //     .then((data) => setFileCounter(data.fileCount))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <div>
        <button onClick={openFullscreen}>Edit</button>
      </div>

      <div id='fullScreen' ref={container}>
        <Image
          src={`/images/images_${count}.png`}
          className='z-1 absolute top-[10rem] h-[140vh] w-[100%] '
          alt='changing image'
          quality={100}
          layout='fill'
          priority
        />
      </div>
    </main>
  );
}
