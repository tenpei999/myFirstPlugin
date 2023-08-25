import { useEffect } from '@wordpress/element';

export const useOutsideClick = (ref, callback) => {

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target) && !e.target.closest('.layout')) {
            console.log("handleClickOutside condition: TRUE");
            callback();
        } else {
            console.log("handleClickOutside condition: FALSE");
        }
    };    

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, [ref, callback]);
};
