function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log('Data mobil sebelum dilakukan sort descending: ', cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // sort descending menggunakan algoritma bubble sort

  for (let i=0 ; i < result.length; i++) {
    for (let j=0; j < result.length - i - 1; j++)
    if (result[j].year < result[j+1].year){
      let x = result [j];
      result[j] = result[j+1];
      result[j+1] = x;
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending

  console.log('Data mobil sesudah dilakukan sort descending: ', result);
  return result;
}
