const Calculo = (calculoEnviado) => {
  return { 
      ...calculoEnviado, 
      name: calculoEnviado.name, 
      email: calculoEnviado.email, 
      street: calculoEnviado.street, 
      city: calculoEnviado.city, 
      state: calculoEnviado.state,
      vehicle: {
          model: calculoEnviado.vehicle.model, 
          brand: calculoEnviado.vehicle.brand
      }
  };
}

export default Calculo;