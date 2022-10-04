import './Stats.css'
import Bar from './Bar'
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
            <table className='Tabla'>
        <tbody>
            {stats && stats.map((el) => (
                <tr key={el.stat.name}>
                    <th> {formatStatName(el.stat.name)} </th>
                    <td style={{ width: "100%", minWidth: "100%" }}>
                        <Bar baseStat={el.base_stat} />
                    </td>
                    <td> {el.base_stat} </td>
                </tr>
            ))}
        </tbody>
    </table>

            </div>
    )
}

export default Stats