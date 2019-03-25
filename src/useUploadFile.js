import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import buffer from 'buffer';

export function useUploadFile() {
  const [status, setStatus] = useState('NOT_STARTED');
  const [name, setName] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const upload = () => {
      setStatus('IN_PROGRESS');
      // const bufferedImageData = new Buffer(file, 'base64');

      fetch(file)
        .then(res => res.blob())
        .then(blob => {
          console.log(blob);

          return Storage.put(name, blob, {
            level: 'private',
            contentType: 'image/svg+xml',
          });
        })
        .then(result => {
          setStatus('COMPLETED');
          console.log(result.key);
        })
        .catch(() => {
          setStatus('FAILED');
        })
        .finally(() => {
          setTimeout(() => {
            setStatus('NOT_STARTED');
          }, 2000);
        });
    };

    if (name !== null) {
      upload();
    }
  }, [name]);

  const uploadFile = (file, name) => {
    setFile(file);
    setName(name);
  };

  return [status, uploadFile];
}
