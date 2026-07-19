import React, {type ReactNode} from 'react';

/**
 * Injected once, site-wide: the SVG displacement filter that gives the
 * floating navbar its "liquid glass" refraction (bends/warps whatever is
 * blurred behind it, rather than just tinting it). Referenced from
 * custom.css via `backdrop-filter: url(#os-liquid-glass) ...`.
 */
export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      <svg aria-hidden="true" focusable="false" style={{position: 'absolute', width: 0, height: 0, overflow: 'hidden'}}>
        <defs>
          <filter id="os-liquid-glass" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.009 0.02" numOctaves="2" seed="8" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="2.5" result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {children}
    </>
  );
}
