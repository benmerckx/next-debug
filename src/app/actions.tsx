'use server'

import { draftMode } from "next/headers"


export async function setDraftMode(isEnabled: boolean) {
  if (isEnabled) draftMode().enable()
  else draftMode().disable()
}