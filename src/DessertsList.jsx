const DessertsList = ({ data }) => {
  const compareCalories = (a, b) => {
    return a.calories - b.calories;
  };

  const caloriesSort = data.sort(compareCalories);

  const lowCaloriesDesserts = caloriesSort.filter((low) => {
    return low.calories < 500;
  });

  const dessertslist = lowCaloriesDesserts.map((dessert) => {
    const text = `${dessert.name} - ${dessert.calories} cals`;
    return <li>{text}</li>;
  });

  return (
    <div>
      <h1>Desserts</h1>
      <ul>{dessertslist}</ul>
    </div>
  );
};

export default DessertsList;
