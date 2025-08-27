"use client";

const demostrings = ["Mobile Money", "Cartes bancaires"];
import { TypeAnimation } from "react-type-animation";
export default function TyperComponent({ strings = demostrings }) {
  return (
    <TypeAnimation
      sequence={[...strings.flatMap((element) => [element, 2000])]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
