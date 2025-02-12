const Tooltip = ({ text, showTooltipState }) => {

    return (
        <div>
            <button
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    right: '30px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ccc',
                    cursor: 'help',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onMouseEnter={() => showTooltipState.setShowTooltip(true)}
                onMouseLeave={() => showTooltipState.setShowTooltip(false)}
            >
                ?
            </button>
            {showTooltipState.showTooltip && (
                <div style={{
                    position: 'absolute',
                    bottom: '130px',
                    right: '30px',
                    padding: '5px',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}>
                    {text}
                </div>
            )}
        </div>
    )
}

export default Tooltip