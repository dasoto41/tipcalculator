function Total({ propina, cuenta }) {
  return (
    <div>
      <p>
        El Monto Total a pagar es ${cuenta + propina} : Total cuenta ${cuenta} +
        Promedio Propina ${propina}{" "}
      </p>
    </div>
  );
}

export default Total;
