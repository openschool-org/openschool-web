import React from 'react';

export default function OsOrbs(): React.ReactElement {
  return (
    <div className="os-bg-texture" aria-hidden="true">
      <div className="os-bg-grid" />
      <div className="os-bg-glow os-bg-glow--1" />
      <div className="os-bg-glow os-bg-glow--2" />
    </div>
  );
}
