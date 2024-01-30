'use client'

import { setDraftMode } from "./actions";
import { useRouter } from "next/navigation";

interface TogglesProps {
  isEnabled: boolean
}

export function Toggles({isEnabled}: TogglesProps) {
  const router = useRouter()
  return (
    <div>
      <p>
        Draft mode is {isEnabled ? 'enabled' : 'disabled'}
      </p>
      <button onClick={async () => {
        await setDraftMode(!isEnabled)
        router.refresh()
      }}>Enable draft Mode</button>
    </div>
  );
}
