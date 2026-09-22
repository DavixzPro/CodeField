import type { ArenaType } from "../engine/Arena.ts";

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

            {/* ================================================= */}
            {/* EQUIPE */}
            {/* ================================================= */}

            <div className="team-number">
                #17893
            </div>


            {/* ================================================= */}
            {/* LOGO + NOME */}
            {/* ================================================= */}

            <div className="topbar-brand">

                <img
                    src="LogoCodeTech.png"
                    alt="CodeTECH"
                    className="team-logo"

                />

                <span className="codefield-title">
                    CodeField
                </span>

            </div>


            {/* ================================================= */}
            {/* SEASON */}
            {/* ================================================= */}

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