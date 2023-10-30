// useBackgroundStyles.js
import { useState, useEffect } from 'react';

function useBackgroundStyles(backgroundStyleType, selectedMedia, backgroundColor, backgroundGradient) {
  const [backgroundStyles, setBackgroundStyles] = useState({});

  useEffect(() => {
    switch (backgroundStyleType) {
      case 'image':
        if (selectedMedia) {
          setBackgroundStyles({
            backgroundImage: `url('${selectedMedia}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          });
        }
        break;

      case 'color':
        if (backgroundColor) {
          setBackgroundStyles({
            background: backgroundColor,
          });
        }
        break;

      case 'gradient':
        if (backgroundGradient) {
          setBackgroundStyles({
            background: backgroundGradient,
          });
        }
        break;

      default:
        // 他のスタイルタイプやデフォルトの処理をここに追加できます。
        break;
    }
  }, [backgroundStyleType, selectedMedia, backgroundColor, backgroundGradient]);

  return backgroundStyles;
}

export default useBackgroundStyles;
