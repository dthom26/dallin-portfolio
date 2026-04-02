import { useCallback, useState } from "react";

export function useAccordion({ multiple = true, defaultOpen = [] } = {}) {
  const [openItems, setOpenItems] = useState(defaultOpen || []);

  const isOpen = useCallback((id) => openItems.includes(id), [openItems]);

  const toggle = useCallback(
    (id) => {
      setOpenItems((prev) => {
        if (prev.includes(id)) return prev.filter((x) => x !== id);
        return multiple ? [...prev, id] : [id];
      });
    },
    [multiple]
  );

  const setOpen = useCallback((items) => setOpenItems(items), []);

  return { openItems, isOpen, toggle, setOpen };
}

export default useAccordion;
