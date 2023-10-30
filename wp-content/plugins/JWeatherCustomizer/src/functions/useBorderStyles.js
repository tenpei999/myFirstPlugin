import { useState, useEffect } from 'react';

function useBorderStyles(borders) {
  const [borderStyles, setBorderStyles] = useState({});

  useEffect(() => {
    if (borders) {
      setBorderStyles({
        borderTop: `${borders.top.width} ${borders.top.style} ${borders.top.color}`,
        borderRight: `${borders.right.width} ${borders.right.style} ${borders.right.color}`,
        borderBottom: `${borders.bottom.width} ${borders.bottom.style} ${borders.bottom.color}`,
        borderLeft: `${borders.left.width} ${borders.left.style} ${borders.left.color}`,
      });
    }
  }, [borders]);

  return borderStyles;
}

export default useBorderStyles;