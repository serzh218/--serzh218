
import React, { useState, useEffect } from 'react';
import { Puck, Render } from '@puckeditor/core';
import '@puckeditor/core/puck.css';
import { config } from './puck.config';
import initialData from './data.json';

export default function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'TOGGLE_EDIT_MODE') setIsEditing(e.data.isEditing);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (isEditing) {
    return (
      <Puck
        config={config}
        data={data}
        onPublish={async (newData) => {
          setData(newData);
          window.parent.postMessage({ source: 'puck-editor', type: 'PUCK_SAVE', payload: newData }, '*');
        }}
        iframe={{ enabled: false }}
      />
    );
  }

  return <Render config={config} data={data} />;
}
