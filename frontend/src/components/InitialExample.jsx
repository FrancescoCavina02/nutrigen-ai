import { weeklyDietPlan } from "./InitialExampleData/InitialData";
import styles from "./InitialExample.module.css";

const InitialExample = () => {
    return (
        <table className={styles["diet-table"]}>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Lunch</th>
                    <th>Snack</th>
                    <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
                {weeklyDietPlan.map((row, index) => (
                    <tr key={index}>
                        <td>{row.Day}</td>
                        <td>{row.Breakfast}</td>
                        <td>{row.Lunch}</td>
                        <td>{row.Snack}</td>
                        <td>{row.Dinner}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default InitialExample;
