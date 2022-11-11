import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";

function Particle() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="particles">
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
        </div>
    );
}

export default Particle;
