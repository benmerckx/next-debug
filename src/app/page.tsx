import { draftMode } from "next/headers";
import { Toggles } from "./toggles";


export default async function Home() {
  const {isEnabled} = draftMode()
  return (
    <Toggles isEnabled={isEnabled} />
  );
}
