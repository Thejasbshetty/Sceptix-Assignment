"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;//The purpose of pathname in this code is to display the current pathname in a <p> element.
}
