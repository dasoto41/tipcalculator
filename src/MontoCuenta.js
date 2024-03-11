function MontoCuenta({ cuenta, onCuenta }) {
  return (
    <div>
      <label>El Monto de tu cuenta fue</label>
      <input
        type="text"
        placeholder="Ingresa el Monto..."
        value={cuenta}
        onChange={(e) => onCuenta(Number(e.target.value))}
      />
    </div>
  );
}

export default MontoCuenta;
