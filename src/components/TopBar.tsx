import type { ArenaType } from "../engine/Arena.ts";
import logoCodeTech from "../assets/LogoCodeTech.png";

interface Props {

    openStrategies: () => void;

    arenaType: ArenaType;

    setArenaType: (
        type: ArenaType
    ) => void;

}

export default function TopBar({
    arenaType,
    setArenaType
}: Props) {

    return (

        <header className="topbar">

            <div className="team-number">
                #17893
            </div>

            <div className="topbar-brand">

                <img
                    src={logoCodeTech}
                    alt="CodeTECH"
                    className="team-logo"
                />

                <span className="codefield-title">
                    CodeField
                </span>

            </div>

            <div className="season-selector">

                <span>
                    Season
                </span>

                <select
                    value={arenaType}
                    onChange={(event) =>
                        setArenaType(
                            event.target.value as ArenaType
                        )
                    }
                >

                    <option value="DECODE">
                        DECODE
                    </option>

                    <option value="BIOBUZZ">
                        BIOBUZZ
                    </option>

                </select>

            </div>

        </header>

    );

}