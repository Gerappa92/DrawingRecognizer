import styles from "./Select.module.css"

export default function Select({options, onChange}) {
    return (
        <select className={styles.select} onChange={(e) => onChange(e.target.value)}>
            {<option value="">Choose Gen style</option>}
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>)
}