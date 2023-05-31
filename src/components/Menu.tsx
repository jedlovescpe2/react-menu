import MenuItem from "./MenuItem";

export interface iMenu {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const Menu = ({ menu }: { menu: iMenu[] }) => {
  return (
    <div className="section-center">
    {menu.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
      

  );
};
export default Menu;
