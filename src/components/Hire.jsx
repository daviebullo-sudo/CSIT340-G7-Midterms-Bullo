import react from "react";
import { jsxs } from "react/jsx-runtime";

export default function Hire({rate}) {
    return (
        jsxs("div", { className: "flex items-center justify-between rounded-xl bg-[#222222] p-6 text-[#FAF3E1] gap-4", children: [
                jsxs("div", { children: [
                        jsxs("h3", { className: "text-2xl font-bold", children: [
                                "Hire me for", hours, " hours"
                            ] }),
                        jsxs("p", { className: "mt-1 text-xl", children: [
                            "Total: ",
                            jsxs("span", { className: "font-bold text-[#FA8112]", children: [
                                "PHP", hours * props.rate],
                            }),
                        ] })
                    ] }),
        ],
        }),
                                