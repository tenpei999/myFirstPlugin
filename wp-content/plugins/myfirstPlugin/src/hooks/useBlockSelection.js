import { useState, useEffect } from '@wordpress/element';
import { select, subscribe } from '@wordpress/data';

function useBlockSelection() {
    const [showSelection, setShowSelection] = useState(false);
    let previouslySelectedBlockId = null;

    useEffect(() => {
        const unsubscribe = subscribe(() => {
            const selectedBlockId = select('core/block-editor').getSelectedBlockClientId();

            // 新しくブロックが選択された場合
            if (selectedBlockId && previouslySelectedBlockId !== selectedBlockId) {
                setShowSelection(true);
            }

            // ブロックの選択が解除された場合
            if (!selectedBlockId && previouslySelectedBlockId) {
                setShowSelection(false);
            }

            previouslySelectedBlockId = selectedBlockId;
        });

        // コンポーネントのクリーンアップ時に購読を解除する
        return () => unsubscribe();

    }, []);

    const handleLayoutClick = (e) => {
        e.stopPropagation();
        if (!showSelection) {
            setShowSelection(true);
        }
    };

    return { showSelection, handleLayoutClick };
}

export default useBlockSelection;
