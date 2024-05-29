import { randomColor } from "../../src/utils/randomColors";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(`/color?color=${randomColor()}`);
}
