import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function TornHeader({children}: Props): React.ReactElement {
  return (
    <header className="os-torn-band">
      <div className="os-container">{children}</div>
      <div className="os-torn-edge" aria-hidden="true" />
    </header>
  );
}
