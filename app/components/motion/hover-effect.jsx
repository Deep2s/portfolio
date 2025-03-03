"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import UseAnimationFrame from "./cube-motion";

export default function HoverMotion() {
    const ref = useRef(null)
    const [{ width, height, top, left }, measure] = useElementDimensions(ref)
    const gradientX = useMotionValue(0.5)
    const gradientY = useMotionValue(0.5)
    const background = useTransform(
        () =>
            `conic-gradient(from 0deg at calc(${
                gradientX.get() * 100
            }% - ${left}px) calc(${
                gradientY.get() * 100
            }% - ${top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
    )

    return (
        <div
            style={{
                position: "relative",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // flexDirection: "column"
            }}
            onPointerMove={(e) => {
                gradientX.set(e.clientX / width)
                gradientY.set(e.clientY / height)
            }}
        >
            {/* <div className="text-3xl md:pb-8 text-center bg-clip-text text-transparent" style={{
                background: "conic-gradient(from 0deg at calc(228% - 298.4px) calc(137.05% - 158.175px), rgb(12, 220, 247), rgb(255, 0, 136), rgb(255, 243, 18), rgb(12, 220, 247))",
                
            }}> 
                Please hover on me
            </div> */}
            <motion.div
                ref={ref}
                style={{
                    background,
                    width: 400,
                    height: 400,
                    borderRadius: 50,
                    cursor: "none",
                    // marginTop: 5
                }}
                onPointerEnter={() => measure()}
            />
            <UseAnimationFrame />

        </div>
    )
}

/**
 * ================  Utils  =========================
 */

function useElementDimensions(
    ref
) {
    const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

    function measure() {
        if (!ref.current) return

        setSize(ref.current.getBoundingClientRect())
    }

    // Note: This won't accurately reflect viewport size changes
    useEffect(() => {
        measure()
    }, [])

    return [size, measure]
}
