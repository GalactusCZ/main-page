import { Icon } from "@iconify/react";
import { Button } from "./button";

export default function ThemeToggle() {
  const isClient = typeof window !== 'undefined';

  const isCs = isClient ? window.location.pathname.startsWith('/cs') : false;

  const toggleLanguage = () => {
    if (!isClient) return;

    const currentPath = window.location.pathname;
    let newPath = "";

    if (isCs) {
      newPath = currentPath.replace(/^\/cs/, "") || "/";
    }
    else {
      newPath = `/cs${currentPath === "/" ? "" : currentPath}`;
    }

    window.location.href = newPath;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full cursor-pointer flex gap-2 px-3"
    >
      <Icon icon="lucide:languages" className="h-5 w-5" />
      <span className="text-xs font-bold uppercase">
        {isCs ? "EN" : "CZ"}
      </span>
      <span className="sr-only">Change language</span>
    </Button>
  );
}
