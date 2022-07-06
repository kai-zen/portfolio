/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from '@mui/material';
import { useRef } from 'react';
import { useEffect } from 'react';

const Panel = () => {
  var i = 0;
  var txt = "I can't share any details about panel :(";

  const paragraph = useRef();

  function typeWriter() {
    if (paragraph && paragraph.current && i < txt.length) {
      paragraph.current.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return <Typography id="demo" variant="h4" ref={paragraph}></Typography>;
};

export default Panel;
