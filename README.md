🟦 Pipeline‑4‑Load (Gründer‑Ebene ¹, System‑Ebene ², Kosmos‑Ebene ³)

META arbeitet mit einer dreifachen Pipeline:

AX_forward()  — Gründer‑Ebene (Vorwärts‑Frames)
IS_state()    — System‑Ebene (Zustands‑Frames)
XA_return()   — Kosmos‑Ebene (Rückführungs‑Frames)

Die Pipeline wird im Public‑Frontend über index.html geladen:

<script type="module">
    import { AX_forward } from "./AX/forward.js";
    import { IS_state } from "./IS/state.js";
    import { XA_return } from "./XA/return.js";

    AX_forward();   // Ebene ¹
    IS_state();     // Ebene ²
    XA_return();    // Ebene ³
</script>

Damit ist META vollständig MARKT‑3‑fähig und trägt alle drei Achsen neutral.
