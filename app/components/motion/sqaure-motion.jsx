"use client"

import * as motion from "motion/react-client"
import { useTransform } from "framer-motion"
import { useRef } from "react"

export default function DragConstraints() {
    const constraintsRef = useRef(null);
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 50
        }}>
            <motion.div ref={constraintsRef} style={constraints}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                style={box}
            />
        </motion.div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const constraints = {
    width: 300,
    height: 300,
    background: "linear-gradient(45deg, #764BA2, #667EEA)",
    borderRadius: 10,

}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 10,
}
