interface Props {
  children: string;
  showAlert: false;
  onSelectItem: (item: string) => void;
}

const handlerButton = () => {
  console.log("Button");
};

const ButtonB = ({ children, showAlert }: Props) => {
  return <div className="btn btn-warning" onClick={() => handlerButton}></div>;
};

export default ButtonB;
