import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { SelectControl, Button, ColorPalette, GradientPicker } from '@wordpress/components';

const BackgroundSelector = ({ attributes, setAttributes }) => {
  const { backgroundStyleType } = attributes;

  console.log(attributes)

  const handleMediaSelect = (media) => {
    if (!media) {
      setAttributes({
        backgroundImage: null,
        selectedMedia: null,
      });
      return;
    }

    const selectedMediaUrl = media.url;
    setAttributes({
      backgroundImage: selectedMediaUrl,
      selectedMedia: selectedMediaUrl,
    });
  };

  const handleColorChange = (color) => {
    // setBackgroundColor(color);
    setAttributes({ backgroundColor: color });
  };

  const handleGradientChange = (newGradient) => {
    setAttributes({ backgroundGradient: newGradient });
  };

  const handleBackgroundStyleChange = (newStyleType) => {
    setAttributes({ ...attributes, backgroundStyleType: newStyleType });
  };

  console.log(attributes)

  return (
    <div>
      <SelectControl
        label="背景スタイル"
        value={attributes.backgroundStyleType} // 現在の値をattributesから取得
        options={[
          { label: '画像', value: 'image' },
          { label: 'カラー', value: 'color' },
          { label: 'グラデーション', value: 'gradient' },
        ]}
        onChange={handleBackgroundStyleChange} // ここで新しい関数を使用します
      />
      {backgroundStyleType === 'image' && (
        <MediaUploadCheck>
          <MediaUpload
            onSelect={handleMediaSelect}
            allowedTypes={['image']}
            value={attributes.backgroundImage}
            render={({ open }) => <Button onClick={open}>Open Media Library</Button>}
          />
        </MediaUploadCheck>
      )}
      {backgroundStyleType === 'color' && (
        <ColorPalette
          onChange={handleColorChange}
          value={attributes.backgroundColor}
        />
      )}
      {backgroundStyleType === 'gradient' && (
        <GradientPicker
          value={attributes.backgroundGradient}
          onChange={handleGradientChange}
          gradients={[
            {
              name: 'JShine',
              gradient:
                'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
              slug: 'jshine',
            },
            {
              name: 'Moonlit Asteroid',
              gradient:
                'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
              slug: 'moonlit-asteroid',
            },
            {
              name: 'Rastafarie',
              gradient:
                'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
              slug: 'rastafari',
            },
          ]}
        />
      )}
    </div>
  );
};

export default BackgroundSelector;
