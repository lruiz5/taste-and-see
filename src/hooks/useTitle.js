import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Taste and See / ${title || "Loading..."}`;
  }, [title]);
  return null;
};
