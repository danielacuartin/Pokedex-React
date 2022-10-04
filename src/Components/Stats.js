import './Stats.css'
function formatStatName(stats) {
    switch (stats) {
        case "hp":
            return "HP"

        case "attack":
            return "Attack"

        case "defense":
            return "Defense"

        case "special-attack":
            return "Sp. Atk"

        case "special-defense":
            return "Sp. Def"

        case "speed":
            return "Speed"

        default:
            return stats
    }
}

const Stats = ({ stats }) => {

    return (
        <div className="poke-stats">
            <div className='StatsText'>
                {stats && stats.map(el => (
                    <p>{formatStatName(el.stat.name)}:</p>
                ))}
            </div>

            <span>

                    {stats.map((el) => {
                        return (
                            <p>{`${el.base_stat}`} </p>
                        )
                    })}
                </span>

            </div>
    )
}

export default Stats