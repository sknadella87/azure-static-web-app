import { useState,useEffect } from 'react'

const useToggle = (target) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const close = () => setOpen(false);
        document.body.addEventListener('click', () => close());
        document.body.addEventListener('closeMenu', event => {
            if (event.detail.target !== target) {
                close();
            }
        });
        // return document.body.removeEventListener('click', close);
    }, []);

    const stopPropagation = e => {
        e.stopPropagation();
        const event = new CustomEvent('closeMenu', {
            ignore: target,
            detail: { target }
        });
        document.body.dispatchEvent(event);
    };

    const toggle = () => setOpen(open => !open);
    const containerProps = { onClick: stopPropagation };
    
    return { open, setOpen, toggle, containerProps };
}

export default useToggle;
