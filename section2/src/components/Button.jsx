import "./Button.css";

export default function Button({ color, children }) {
    return (
        <button
            style={{
                backgroundColor: color
            }}
            className="button"
        >{children}
        </button>
    )
}
