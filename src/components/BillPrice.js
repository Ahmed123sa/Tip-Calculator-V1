
export default function({billPrice,handleChange}) {
    
    return (<div className="bill">
        <h3>How Much The Bill?</h3>
<input type="number" value={billPrice} onChange={handleChange} />

    </div>)
}