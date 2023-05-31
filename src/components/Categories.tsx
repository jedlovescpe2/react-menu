const Categories = ({
  options,
  filterItems,
}: {
  options: string[];
  filterItems: (category:string) => void;
}) => {
  
  return (
    <div className="btn-container">
      {options.map((option,index) => {
        return <button key={index} className="btn" onClick={()=>{
          filterItems(option)
        }}>{option}</button>;
      })}
    </div>
  );
};
export default Categories;
