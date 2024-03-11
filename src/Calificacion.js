function Calificacion({ propina, onPropina, children }) {
  console.log(propina);
  return (
    <div>
      <p>{children}</p>
      <select
        value={propina}
        onChange={(e) => onPropina(Number(e.target.value))}
      >
        <option value={20}> Excelente! +20% </option>
        <option value={15}> bueno! +15% </option>
        <option value={10}> Regular +10% </option>
        <option value={0}> Malo +0% </option>
      </select>
    </div>
  );
}

export default Calificacion;
